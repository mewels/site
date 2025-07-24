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