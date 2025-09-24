import { fetchPages } from "@/lib/notion";
import { Blog } from "./blog";

export default async function BlogPage() {
    const articles = await fetchPages();
    return <Blog articles={articles.results} />;
}
