<script>
  import Sidebar from "./Sidebar.svelte";
  import '../app.css'

</script>

<svelte:head>
<link rel="webchain"
    href="https://webchain.milkmedicine.net/" />
  <link rel="webchain-nomination"
    href="https://painfeeledsubstation.web.fc2.com/" />
  <link rel="webchain-nomination"
    href="https://yogurt200.com/" />
</svelte:head>
<div class = "container">
    <Sidebar />
    <main id = "main" class = "page-width page-padding">
        <slot />
    </main>
</div>