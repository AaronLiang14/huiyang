"use client";

import { Button } from "@/components/ui";
import { BookOpen, TrendingUp } from "lucide-react";
import { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { categories } from "./constants";

export const Blog = ({ articles }: { articles: any }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredPosts =
        selectedCategory === "all"
            ? articles
            : articles.filter((post: any) =>
                  post.properties.tags.multi_select.some(
                      (tag: any) => tag.name === selectedCategory
                  )
              );

    return (
        <div className="min-h-screen px-4 py-20">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-primary mb-6 text-4xl font-bold md:text-5xl">專業文章</h1>
                    <p className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed">
                        分享最新的稅務知識、會計實務與企業管理心得，
                        協助您掌握財務管理的關鍵資訊，提升企業競爭力。
                    </p>
                </div>

                {/* Featured Posts */}
                {articles.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-primary mb-8 flex items-center text-2xl font-bold">
                            <TrendingUp className="mr-3 h-6 w-6" />
                            精選文章
                        </h2>
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {articles.map((post: any) => (
                                <ArticleCard key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Category Filter */}
                <section className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category.id)}
                                className="cursor-pointer transition-all duration-200"
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-primary mb-8 flex items-center text-2xl font-bold">
                        <BookOpen className="mr-3 h-6 w-6" />
                        {selectedCategory === "all"
                            ? "所有文章"
                            : categories.find((c) => c.id === selectedCategory)?.name}
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post: any) => (
                            <ArticleCard key={post.id} post={post} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
