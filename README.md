
Auth.js created a   sveltekit adapter : https://authjs.dev/reference/sveltekit

Auth.js provider type : OAuth
https://authjs.dev/guides/providers/custom-provider

change this before prod :
https://warnings.authjs.dev#debug-enabled
 
 
Later : Change from Oauth client id to World ID

AUTH0 Configuration  :

allowed callback URL
http://localhost:4000/auth/callback/auth0, https://svelte-kit-world-id.vercel.app/auth/callback/auth0, https://*.vercel.app

web orgin:
http://localhost:4000, https://*.vercel.app