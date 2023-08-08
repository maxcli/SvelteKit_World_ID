<script>

 import { version } from '$app/environment'

 export let data
 const {session}=data

</script>

 
<p></p>
<h1>About</h1>

{#if session?.user }  
    <p style="text-align:center;">
    <img id="avatar"  src={session?.user?.image} alt="avatar"  />
    </p>
    <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{session.user?.name ?? "User"}</strong>
      </span>
{/if}

 