<script>
   export const appName ='SvelteKit &  OAUTH0'   
</script>
<header>
<nav>
<ul>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/auth">Auth</a>
    </li>
    <li>
        <a href="/protected">Protected</a>
    </li>
 
</ul>
</nav>
<h1>{appName}</h1>  

</header>



<slot/>

<style>


      
nav{
    display: flex;
}

nav a{
    margin-right: 1rem;
}


</style>