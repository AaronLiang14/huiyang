import { fetchPageBlocks, fetchPageBySlug, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { ArticleDetail } from "./ArticleDetail";

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await fetchPageBySlug(params.slug);

    if (!post) return <div>page not found</div>;

    const blocks = await fetchPageBlocks(post.id);

    const renderer = new NotionRenderer({
        client: notion,
    });

    renderer.use(hljsPlugin({}));

    const html = await renderer.render(...blocks);

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="container mx-auto">
                <ArticleDetail post={post} />
                <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
        </div>
    );
}
