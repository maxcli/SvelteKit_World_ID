<script>
import { IDKitWidget } from '@worldcoin/idkit'  
import { signIn ,signOut} from '@auth/sveltekit/client';
import { page } from "$app/stores"
import { browser } from '$app/environment'
 

 

</script>



<div class="flex space-x-8">
  {#if $page.data.session}

    {#if $page.data.session.user?.image}
    
      <span
      style="background-image: url('{$page.data.session.user.image}')"
      class="avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <button on:click={() => signOut()} class="btn">Sign out</button>
  {:else}
    <button class="btn"  on:click={() => signIn(
    'auth0', {
    redirect: false,
    callbackUrl: 'http://localhost:4000'
    },
    {
      scope: 'api openid profile email'
    }
    )}>Sign In with Auth0</button>
  {/if}


</div>

<style>
    .btn {
      padding: 0.8rem 1rem 0.7rem;
      border: 0.2rem solid #4d4d4d;
      cursor: pointer;
      text-transform: capitalize;
      width: 200px;
    
    
    
    }
</style>