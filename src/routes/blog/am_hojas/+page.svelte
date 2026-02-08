<script>
    import '../../../app.css'

    export let data;

    import MarkdownIt from 'markdown-it';
    const md = new MarkdownIt({html:true, typographer:false,});
</script>
<div class = "post">
        {@html md.render(data.module)}
</div>