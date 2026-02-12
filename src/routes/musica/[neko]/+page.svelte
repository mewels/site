<script>
    export let data;
    let thisproject = data.project

    import { marked } from 'marked';
</script>
<div class = fakemain>
<div class = shell>
    <div class = left>
        <div class = border>
            <img src= "{thisproject.filename}" alt = "{thisproject.title}">
        </div>
    </div>
    <div class = right>
        <div class = title>
            {thisproject.title}
            <br>
            <div class = artist>
                {thisproject.artist}
            </div>      
        </div>
        <div class = pagetext>
            {@html marked(data.module)}
        </div>
        <div class = embeds>
            {#each thisproject.links as link}
                {#if link.includes("bandcamp")}
                <a href = {link}>bandcamp</a>
                {:else if link.includes("soundcloud")}
                <a href = {link}>soundcloud</a>
                {:else if link.includes("youtube")}
                <a href = {link}>youtube</a>
                {:else if link.includes("archive")}
                <a href = {link}>internet archive</a>
                {/if}
                <br>
            {/each}
        </div>
    </div>
</div>
</div>

<style>
    .shell {
        border: 1px none red;
        max-height: 65rem;
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: row;
        gap: 0px 5em;

    }

    .left {
        border: 1px none blue;
        margin: 0px;
        padding: 0px;
        max-width: 40%;
        min-width: 350px;
    }

    .right {
        border: 1px none green;
        margin: 0px;
        padding: 0px;        
    }

    .border {
        border: 1px none solid;
        margin: 0px;
        padding: 0px;
        display: flex;
    }

    .border img {
        width: 100%;
    }

    .title {    
        font-size: 20pt;
        font-weight: bold;
        text-align: left;
        padding-bottom: 10px;
        border-bottom: 1px black dotted;
    }
    .artist {
        font-weight: lighter;
        font-size: 16pt;
    }

    .pagetext {
        margin-top: 1em;
        text-indent: 1em;
    }

    .embeds {
        font-size: 11pt;
    }

    /* mobile */
    @media (max-width: 1000px) {
        .title {
            font-size: 16pt;
        }

        .artist {
            font-size: 14pt;
        }

        .fakemain {
            display:flex;
            flex-direction: column;
            align-items: center;
        }

        .shell {
            flex-direction: column;
            align-items: center;
            max-width: 95%;
        }

        .left {
            max-width: 350px;
            min-width: 0px;
        }

        .right {
            font-size: 14px;
            margin-right: 0px;
            margin-left: 0px;
            align-items: center;
        }

        .border {
            margin-top: 1em;
            margin-bottom: 1em;
            align-items: center;
        }
    }
</style>