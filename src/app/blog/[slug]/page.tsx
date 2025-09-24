import { fetchPageBlocks, fetchPageBySlug, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await fetchPageBySlug(params.slug);

    if (!post) return <div>page not found</div>;

    const blocks = await fetchPageBlocks(post.id);

    const renderer = new NotionRenderer({
        client: notion,
    });

    renderer.use(hljsPlugin({}));

    const html = await renderer.render(...blocks);

    return <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>;
}
