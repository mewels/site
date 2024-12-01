<script>
    import "../app.css"
    export let caption = "untitled";
    export let filename = "background.webp";
    var path = "../../"
    path = path.concat(filename)
</script>

<div class = "wrapper">
    <div class = "box ">
        <a href = {path}><img src = {path} alt = {caption}/></a>
    </div>
    <!-- <span class = "caption">{caption}</span> -->
</div>

<style>

    .wrapper {
        display: flex;
        flex-direction: column;
        align-self: first baseline;
        align-items: center;
        gap: 0px;

    }

    .box {
        display: flex;
        border: 1px;
        border-color: grey;
        border-style: hidden;
        width: 50vw;
        height: 50vw;
        max-width: 45rem;
        max-height: 45rem;
        margin: 0px;
        margin-bottom: 0;
        justify-content: center; 
        align-items: center;
        padding:0;

    }

    .box img {
        /* object-fit: fill; */
        /* image-rendering: auto; */
        width: auto;
        height: auto;
        max-width: 34rem;
        max-height: 34rem;       
    }

    /* .caption {
        padding: 0;
        margin: 0;
    } */

    a:hover {
        border-style: solid;
        border-color: grey;
        border-width: 1px;
    }

</style>