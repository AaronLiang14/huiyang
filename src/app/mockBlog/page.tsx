"use client";

import { Badge, Button, Card, CardContent } from "@/components/ui";
import { BookOpen, Calendar, Clock, TrendingUp, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const mockBlog = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", name: "全部文章" },
        { id: "tax", name: "稅務知識" },
        { id: "accounting", name: "會計實務" },
        { id: "business", name: "企業管理" },
        { id: "law", name: "法規更新" },
    ];

    const blogPosts = [
        {
            id: 1,
            title: "2024年營所稅申報重點提醒",
            excerpt:
                "整理2024年營利事業所得稅申報的重要變更事項，包括新增扣除項目、申報期限調整等關鍵資訊，協助企業順利完成申報作業。",
            category: "tax",
            author: "王明理",
            date: "2024-03-15",
            readTime: "5分鐘",
            featured: true,
            tags: ["營所稅", "申報", "2024年"],
        },
        {
            id: 2,
            title: "中小企業如何建立完善的內控制度",
            excerpt:
                "探討中小企業建立內控制度的重要性與實務做法，包括制度設計原則、常見缺失與改善建議，提升企業營運效率與風險控管能力。",
            category: "business",
            author: "陳淑華",
            date: "2024-03-10",
            readTime: "8分鐘",
            featured: false,
            tags: ["內控", "風險管理", "中小企業"],
        },
        {
            id: 3,
            title: "電子發票系統導入指南",
            excerpt:
                "完整說明電子發票系統的導入流程，從申請到上線的詳細步驟，以及常見問題的解決方案，協助企業順利轉換至電子發票作業。",
            category: "accounting",
            author: "王明理",
            date: "2024-03-05",
            readTime: "6分鐘",
            featured: false,
            tags: ["電子發票", "數位化", "系統"],
        },
        {
            id: 4,
            title: "勞保健保費率異動對企業的影響",
            excerpt:
                "分析2024年勞保健保費率調整對企業人事成本的影響，提供薪資成本規劃建議與節省策略，協助企業有效控管人事費用。",
            category: "law",
            author: "陳淑華",
            date: "2024-02-28",
            readTime: "4分鐘",
            featured: false,
            tags: ["勞保", "健保", "費率", "人事成本"],
        },
        {
            id: 5,
            title: "創業初期的財務規劃要點",
            excerpt:
                "針對新創企業提供實用的財務規劃建議，包括資金需求評估、現金流管理、投資人關係維護等關鍵要素，奠定企業穩健發展基礎。",
            category: "business",
            author: "王明理",
            date: "2024-02-20",
            readTime: "7分鐘",
            featured: true,
            tags: ["創業", "財務規劃", "現金流"],
        },
        {
            id: 6,
            title: "營業稅零稅率與免稅的差異",
            excerpt:
                "詳細說明營業稅零稅率與免稅的適用條件與差異，避免企業在稅務處理上產生誤解，確保稅務申報的正確性與合規性。",
            category: "tax",
            author: "陳淑華",
            date: "2024-02-15",
            readTime: "5分鐘",
            featured: false,
            tags: ["營業稅", "零稅率", "免稅"],
        },
    ];

    const filteredPosts =
        selectedCategory === "all"
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);

    const featuredPosts = blogPosts.filter((post) => post.featured);

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
                {featuredPosts.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-primary mb-8 flex items-center text-2xl font-bold">
                            <TrendingUp className="mr-3 h-6 w-6" />
                            精選文章
                        </h2>
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {featuredPosts.map((post) => (
                                <Card
                                    key={post.id}
                                    className="group hover:shadow-hover shadow-card overflow-hidden border-0 transition-all duration-300"
                                >
                                    <CardContent className="p-0">
                                        <div className="bg-gradient-hero h-48"></div>
                                        <div className="p-6">
                                            <div className="text-muted-foreground mb-3 flex items-center space-x-4 text-sm">
                                                <span className="flex items-center">
                                                    <Calendar className="mr-1 h-4 w-4" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center">
                                                    <Clock className="mr-1 h-4 w-4" />
                                                    {post.readTime}
                                                </span>
                                                <span className="flex items-center">
                                                    <User className="mr-1 h-4 w-4" />
                                                    {post.author}
                                                </span>
                                            </div>
                                            <h3 className="text-primary group-hover:text-trust-navy mb-3 text-xl font-bold transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {post.tags.map((tag, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <Link href={`/blog/${post.id}`}>
                                                <Button variant="outline" size="sm">
                                                    閱讀更多
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
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
                                className="transition-all duration-200"
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* All Posts */}
                <section>
                    <h2 className="text-primary mb-8 flex items-center text-2xl font-bold">
                        <BookOpen className="mr-3 h-6 w-6" />
                        {selectedCategory === "all"
                            ? "所有文章"
                            : categories.find((c) => c.id === selectedCategory)?.name}
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="group hover:shadow-hover shadow-card overflow-hidden border-0 transition-all duration-300"
                            >
                                <CardContent className="p-0">
                                    <div className="bg-gradient-card h-32"></div>
                                    <div className="p-6">
                                        <div className="text-muted-foreground mb-3 flex items-center justify-between text-sm">
                                            <span className="flex items-center">
                                                <Calendar className="mr-1 h-3 w-3" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="mr-1 h-3 w-3" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-primary group-hover:text-trust-navy mb-3 line-clamp-2 text-lg font-semibold transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="mb-4 flex flex-wrap gap-1">
                                            {post.tags.slice(0, 2).map((tag, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground flex items-center text-sm">
                                                <User className="mr-1 h-3 w-3" />
                                                {post.author}
                                            </span>
                                            <Link href={`/blog/${post.id}`}>
                                                <Button variant="outline" size="sm">
                                                    閱讀
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default mockBlog;
