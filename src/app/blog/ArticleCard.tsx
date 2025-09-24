"use client";

import { Badge, Button, Card, CardContent } from "@/components/ui";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { categories } from "./constants";

export const ArticleCard = ({ post }: { post: any }) => {
    return (
        <Card
            key={post.id}
            className="group hover:shadow-hover shadow-card overflow-hidden border-0 transition-all duration-300"
        >
            <CardContent className="h-full p-0">
                <div className="flex h-full flex-col p-6">
                    <div className="text-muted-foreground mb-3 flex items-center gap-3 text-sm">
                        <span className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {new Date(post.last_edited_time).toLocaleDateString("zh-TW", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                        <span className="text-muted-foreground flex items-center text-sm">
                            <User className="mr-1 h-3 w-3" />
                            王月惠
                        </span>
                    </div>

                    <h3 className="text-primary group-hover:text-trust-navy mb-3 line-clamp-2 text-lg font-semibold transition-colors">
                        {post.properties.title.rich_text[0].plain_text}
                    </h3>
                    <div className="mt-auto flex flex-col">
                        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                            {post.properties.description.rich_text[0]?.plain_text || ""}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                                {post.properties.tags.multi_select.map(
                                    (tag: any, index: number) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {categories.find((c) => c.id === tag.name)?.name}
                                        </Badge>
                                    )
                                )}
                            </div>

                            <Link href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}>
                                <Button variant="outline" size="sm" className="cursor-pointer">
                                    閱讀更多
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
