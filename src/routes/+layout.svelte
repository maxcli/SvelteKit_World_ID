<script>
   export const appName ='SvelteKit & World ID'   
</script>
<header>
<nav>
<ul>
    <li>
        <a href="/">Home</a>
    </li>

    <li>
        <a href="/about">About</a>
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