import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import Auth0Provider from '@auth/core/providers/auth0';
import type { Provider } from '@auth/core/providers';
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { OAUTH0_CLIENT_ID , OAUTH0_CLIENT_SECRET } from "$env/static/private";

if (!OAUTH0_CLIENT_ID){

    throw new Error('Missing Auth ID')
}

if (!OAUTH0_CLIENT_SECRET){

    throw new Error('Missing Auth Secret')
}
async function authorization({ event, resolve }) {
  // Protect any routes under /protected
  if (event.url.pathname.startsWith("/protected")) {
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, "/auth");
    }
  }

  // If the request is still here, just proceed as normally
  return resolve(event);
}


// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
  SvelteKitAuth({
      providers: [    Auth0Provider({
        id: 'auth0',     // ie. callback URL is localhost:4000/auth/callback/auth0
        name: 'Auth0',
        clientId: OAUTH0_CLIENT_ID,
        clientSecret: OAUTH0_CLIENT_SECRET,
        issuer: 'https://dev-2t41lkj345cenb6r.us.auth0.com/',  // <- domain. remember to add trailing `/` 
        wellKnown: 'https://dev-2t41lkj345cenb6r.us.auth0.com/.well-known/openid-configuration'
      }) as Provider
      ],
      secret: 'okij-',
      debug: true,
      session: {
      maxAge: 1800 // 30 mins
      }
  }
),
  authorization
);