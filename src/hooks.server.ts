import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import Auth0Provider from '@auth/core/providers/auth0';
import type { Provider } from '@auth/core/providers';
import type { Handle } from '@sveltejs/kit';

import { OAUTH0_CLIENT_ID , OAUTH0_CLIENT_SECRET } from "$env/static/private";

if (!OAUTH0_CLIENT_ID){

    throw new Error('Missing Auth ID')
}

if (!OAUTH0_CLIENT_SECRET){

    throw new Error('Missing Auth Secret')
}

const config: SvelteKitAuthConfig = {
  providers: [
    Auth0Provider({
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
};

export const handle = SvelteKitAuth(config) satisfies Handle;