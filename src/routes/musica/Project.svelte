<script>
    export let title = "title"
    export let year = "2025"
    export let type = "album"
    export let filename = "favicon.png"
    export let pagename = filename.replace(/.(jpg|png)$/, '');
    pagename = pagename.replace(/_350/, '');
    pagename = pagename.replace(/\/images\//, '');

    let pageX = 0
    let pageY = 0
    
</script>
<svelte:window on:mousemove={e =>({pageX, pageY} = e)}/>
<div class = 'wrapper'>
    <a href = "/musica/{pagename}">
        <div class = 'border'>
            <img src= "{filename}" alt = "{title}">
        </div>
    </a>

    <div class = 'caption mob'>
        <i>{title}</i>
        <br>
        {type}
        <br class = "omitted"> 
        <span class = mob>[</span>{year}<span class = mob>]</span>
    </div>

    <div class = 'caption desk'  style= "position:abolute; top: {pageY}px; left: {pageX}px;">
        <i>{title}</i>
        <br>
        {type}
        <br class = "omitted"> 
        <span class = mob>[</span>{year}<span class = mob>]</span>
    </div>

</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        border: none;
        /* max-width: 150px; 
        min-width: 150px; */
        margin: 10px;
    }

    .wrapper:hover .desk{
        display: block;
    }

    .border {
        border: 1px black none;
        margin: 0px;
        padding: 0px;
        width: 200px;
        /* height: 200px; */
    }   

    .border img {
        width: 100%;
        height: 100%;
    }

    .caption {
        display: none;
        position: absolute;
        background: rgba(255, 255, 255, 0.89);
        border: 1px black dotted;
        text-align: left;
        text-overflow: clip;
        font-size: 11pt;
        min-width: 75px;
        padding: 5px;
    }

    /* .omitted {
        display: none
    } */

    .mob {
        display: none;
    }

    /* mobile */
    @media (max-width: 1000px) {

       .wrapper {
            border: none;
            flex-direction: column;
            max-width: 100px;
            min-width: 0px;
            align-items: start;
       }

        .wrapper:hover .desk{
            display: none;
        }    
       
       .border {
            max-width: 100px;
       }

       .caption {
            display: block;
            position: relative;
            /* padding-left: 10px; */
            text-align: left;
            font-size: 10pt;
            background: none;
            border: none;
       }

       .omitted {
            display: block;
       }

       /* .mob {
            display: none;
       } */

       .desk {
            display:none;
       }
    }

    @media (max-width: 255px) {

       .wrapper {
            border: none;
            flex-direction: row;
            max-width: 100%;
            align-items: start;
       }

       .border {
            max-width: 100px;
       }
    }
</style>