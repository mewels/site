
import projects from '../../../../static/projects.json';

const modules = import.meta.glob('$lib/markdown/*.md', {eager: true, query : '?raw'})

export async function load({params}) {
    let module = ''
    let project = ''
    const a = [...Object.values(projects)].flat()

    for (const r of a)
    {
        let pagename = r.filename.replace(/.(jpg|png)$/, '');
        pagename = pagename.replace(/_350/, '');
        pagename = pagename.replace(/\/images\//, '');
        if (pagename == params.neko) {
            project = r
            break
        }
    }

    for (const [key, value] of Object.entries(modules))
    {
        if (key.endsWith(project.pagetext)) {
            module = value.default
        }
    }

    return {
        params: params,
        project: project,
        module: module
    }
}