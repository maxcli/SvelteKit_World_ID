
Auth.js created a   sveltekit adapter : https://authjs.dev/reference/sveltekit
npm i @auth/core
npm i @auth/sveltekit

Use svelte names : https://kit.svelte.dev/docs/load
 
Auth.js provider type : OAuth
https://authjs.dev/guides/providers/custom-provider

Guides:
https://blog.hyper.io/sveltekit-authentication/ 
https://blog.aakashgoplani.in/sveltekit-authentication-using-sveltekitauth-and-oauth-providers-a-comprehensive-guide#heading-configuring-sveltekitauth-with-auth0
 
AUTH0 
-allowed callback URL
http://localhost:4000/auth/callback/auth0, https://svelte-kit-world-id.vercel.app/auth/callback/auth0, https://*.vercel.app

-web orgin:
http://localhost:4000, https://*.vercel.app