<script>
  import Sidebar from "./Sidebar.svelte";
  import '../app.css'

</script>
<!-- <div class = "header">Wingus</div> -->
<div class = "container">
    <Sidebar />
    <main id = "main" class = "page-width page-padding">
        <slot />
    </main>
</div>


<style>

 .container {
    display:flex;
    align-self: flex-start;
    padding-top: 2rem;
    padding-bottom: 4rem;
    position: relative;
    min-height: 90vh;
 }

 /* .header {
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 0;
    margin-bottom: 0;
 } */
</style>