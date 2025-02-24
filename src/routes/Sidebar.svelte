<script>
    let links = {
        '/' : 'index',
        '/sounds' : 'sounds',
        '/words' : 'words',
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

    <div class = "moblinks">
        {#each Object.entries (links) as [href, text]}
            <a
                {href}
                data-sveltekit-preload-data
            >
                {text}
            </a>
    {/each}
    </div>
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

    .moblinks {
        display: none;
        align-items: center;
    }

    /* mobile */
    @media (max-width: 500px) {
        .sidebar {
            height: 2rem;
            display:flex;
            justify-content: center;
            padding: 0rem;
            margin: 0;
            width: 90%;
        }

        .sidelinks {
            display: none
        }

        .moblinks {
            display: flex;
            margin: 1rem;
            min-width: 90%;
        }

        a {
            padding: 5px;
        }
    }
</style>