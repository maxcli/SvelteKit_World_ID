<script>
import { IDKitWidget } from '@worldcoin/idkit'  
import { browser } from '$app/environment'
let loginButton='Login'

async function walletlogin() {
    console.log('*** wallet login2')
    if (browser) {
     
        console.log('*** wallet login2')
      


          

    }
}

</script>



<div class="flex space-x-8">
 <button  class="btn"
   on:click={async () => {   walletlogin() 

   }}>{loginButton}</button
 >
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