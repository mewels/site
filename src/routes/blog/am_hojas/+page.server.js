
const modules = import.meta.glob('$lib/markdown/blog/*.md', {eager: true, query : '?raw'})
let module = '';
export async function load({params}) {

    for (const [key, value] of Object.entries(modules))
    {
        console.log(key)
        if (key.endsWith("am_hojas.md")) {
            module = value.default
        }
    }

    return {
        params: params,
        module: module,
    }
}