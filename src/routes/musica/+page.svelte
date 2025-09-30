<script>
    import Project from "./Project.svelte";
    import { MediaQuery } from 'svelte/reactivity';

	const mobile = new MediaQuery('max-width: 1000px');

    let {data} = $props()
    let collapsed = $state([0,0,0,0])

    if (mobile.current) {
        // collapse(0)
        collapse(1)
        collapse(2)
        collapse(3)
    }

    
    function collapse(n){
        collapsed[n] += 1
        collapsed[n] = collapsed[n] % 2
    }

</script>
<div class = "fakemain">

<div class = "section">
    nekopath
    {#if collapsed[0] == 0}
        <button class = "collapsable" onclick={(e) => collapse(0)}>▼</button>
    {:else}
        <button class = "collapsable" onclick={(e) => collapse(0)}>▶</button>
    {/if}
</div>

<div class = "notes">
    love letters to drum programming
</div>

{#if collapsed[0] == 0}
<div class = "project">
    {#each data.projects.nekopath as {title, type, year, filename}}
        <Project title = {title} type = {type} year = {year} filename = {filename} />
    {/each}
</div>
{:else}
<div></div>
{/if}

<div class = "section">
    dj tofu
    {#if collapsed[1] == 0}
        <button class = "collapsable" onclick={(e) => collapse(1)}>▼</button>
    {:else}
        <button class = "collapsable" onclick={(e) => collapse(1)}>▶</button>
    {/if}</div>

<div class = "notes">
    remixes, dj mixes, funky kota
</div>

{#if collapsed[1] == 0}
<div class = "project">
    {#each data.projects.djtofu as {title, type, year, filename}}
        <Project title = {title} type = {type} year = {year} filename = {filename} />
    {/each}
</div>
{:else}
<div></div>
{/if}

<div class = "section">
    dead nymphs
    {#if collapsed[2] == 0}
        <button class = "collapsable" onclick={(e) => collapse(2)}>▼</button>
    {:else}
        <button class = "collapsable" onclick={(e) => collapse(2)}>▶</button>
    {/if}

</div>

<div class = "notes">
    a young woman dreams of rocking out
</div>

{#if collapsed[2] == 0}
<div class = "project">
    {#each data.projects.deadnymphs as {title, type, year, filename}}
        <Project title = {title} type = {type} year = {year} filename = {filename} />
    {/each}
</div>
{:else}
<div></div>
{/if}

<div class = "section">
    mara / bagel / other names
    {#if collapsed[3] == 0}
        <button class = "collapsable" onclick={(e) => collapse(3)}>▼</button>
    {:else}
        <button class = "collapsable" onclick={(e) => collapse(3)}>▶</button>
    {/if}

</div>

<div class = "notes">
    odds or ends, "the archive", stuff that isn't anything else
</div>

{#if collapsed[3] == 0}
<div class = "project">
    {#each data.projects.mara as {title, type, year, filename}}
        <Project title = {title} type = {type} year = {year} filename = {filename} />
    {/each}
</div>
{:else}
<div></div>
{/if}

</div>



<style>
    .project {
        display: flex;
        flex-direction: row;
        align-items: normal;
        max-width: 100%;
        overflow-x: scroll;
        flex-wrap: wrap;
        /* justify-content: left; */
        /* background-color: whitesmoke; */
        /* border: 1px black solid;  */
    }

    .notes {
        margin: 0px;
        padding: 0px;
        font-style: italic;
        text-indent: 1em;
    }

    .section {
        text-align: left;
        margin-bottom: 0px;
        font-size: 1.2em;
        font-weight: bold;
        margin-top: 10px;
    }

    .collapsable {
        background: none;
        border: none;
        font-weight: bold;
        padding-bottom: 0px;
        padding-top: 1px;
        /* justify-content: center; */
        text-align: center;
        text-justify: center;
        font-size: 14pt;
    }

    /* mobile */
    @media (max-width: 1000px) {
        .project {
            display: flex;
            flex-direction: row;
            align-items: start;
        }
    }
</style>

