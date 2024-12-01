<script>
    let links = {
        '/' : 'index',
        '/sounds' : 'sounds',
        '/words' : 'words',
        '/images' : 'images',
        '/logs' : 'logs'
    }
</script>

<div class = "sidebar">
    <ul class = "sidelinks">
        {#each Object.entries (links) as [href, text]}
            <li>
                <a
                    {href}
                    data-sveltekit-preload-data
                >
                    {text}
                </a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .sidebar { 
        background: linear-gradient(whitesmoke,rgba(255, 255, 255, 0));
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        margin-left: 1rem;
        padding: 2rem;
        height: 15rem;
    }

    ul {
        list-style-type: none;
        list-style-position: outside;
        padding-left: 0;
        line-height: 2.6;
    }
</style>