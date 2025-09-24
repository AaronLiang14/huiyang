import { Badge, Button } from "@/components/ui";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { categories } from "../constants";

export const ArticleDetail = ({ post }: { post: any }) => {
    console.log(post);
    return (
        <div>
            <div className="mb-8">
                <Link href="/blog">
                    <Button variant="outline" className="group cursor-pointer">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        返回文章列表
                    </Button>
                </Link>
            </div>

            {/* 文章標題區域 */}
            <div className="mb-8 border-b pb-4">
                <h1 className="text-foreground mb-2 text-4xl leading-tight font-bold">
                    {post.properties.title.rich_text[0].plain_text}
                </h1>
                {post.properties.tags.multi_select.map((tag: any, index: number) => (
                    <Badge key={index} variant="secondary" className="text-primary mr-2 text-xs">
                        {categories.find((c) => c.id === tag.name)?.name}
                    </Badge>
                ))}
                <div className="text-muted-foreground mt-2 mb-6 flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.last_edited_time).toLocaleDateString("zh-TW", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        王月惠
                    </div>
                </div>
            </div>
        </div>
    );
};
