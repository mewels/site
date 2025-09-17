<script>
    let links = {
        '/' : 'índice',
        '/obras' : 'obras'
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
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        background: rgb(245,245,245);
        margin-left: 1rem;
        /* padding-top: 1.5rem; */
        /* padding-bottom: 1.5rem; */
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        height: 7.75rem;
    }

    .sidelinks {
        align-items: center;
        justify-content: center;
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
    @media (max-width: 1000px) {
        .sidebar {
            height: 3rem;
            display:flex;
            justify-content: center;
            padding: 0rem;
            margin: 0;
        }

        .sidelinks {
            display: none;
            align-items: center;
        }

        .moblinks {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem;
            /* padding: 1rem; */
            min-width: 90%;
        }

        a {
            padding: 7px;
        }
    }
</style>