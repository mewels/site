<script>
    import '../../../app.css'

    export let data;

    import { marked } from 'marked';
    import markedFootnote from 'marked-footnote';

    marked.use(markedFootnote({prefixId:"",refMarkers:true, description:""}));
</script>
<div class = "post">
        {@html marked(data.module)}
</div>