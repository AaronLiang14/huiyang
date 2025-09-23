"use client";

import { Button, Card, CardContent } from "@/components/ui";
import { companyInfo } from "@/constants/companyInfo";
import { ChevronDown, ChevronUp, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { faqs } from "./constants";

const FAQ = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="container mx-auto px-4 py-20">
            {/* Header */}
            <div className="mb-16 text-center">
                <h1 className="text-primary mb-6 text-4xl font-bold md:text-5xl">常見問題</h1>
                <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
                    這裡整理了客戶最常詢問的問題與答案，希望能快速解決您的疑問。
                    如果找不到您要的答案，歡迎直接聯絡我們。
                </p>
            </div>

            <div className="mx-auto max-w-4xl">
                {faqs.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <h2 className="text-primary mb-6 flex items-center text-2xl font-bold">
                            <HelpCircle className="mr-3 h-6 w-6" />
                            {category.category}
                        </h2>

                        <div className="space-y-4">
                            {category.items.map((faq, itemIndex) => {
                                const globalIndex = categoryIndex * 1000 + itemIndex;
                                const isOpen = openItems.includes(globalIndex);

                                return (
                                    <Card key={itemIndex} className="shadow-card border-0">
                                        <CardContent className="p-0">
                                            <button
                                                onClick={() => toggleItem(globalIndex)}
                                                className="hover:bg-accent/50 flex w-full cursor-pointer items-center justify-between rounded-lg p-6 text-left transition-colors"
                                            >
                                                <h3 className="text-primary pr-4 text-lg font-semibold">
                                                    {faq.question}
                                                </h3>
                                                {isOpen ? (
                                                    <ChevronUp className="text-primary h-5 w-5 flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="text-primary h-5 w-5 flex-shrink-0" />
                                                )}
                                            </button>

                                            {isOpen && (
                                                <div className="px-6 pb-6">
                                                    <div className="border-t border-gray-300 pt-4">
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Section */}
            <section className="mt-20">
                <Card className="shadow-card bg-gradient-card border-0">
                    <CardContent className="p-12 text-center">
                        <h2 className="text-primary mb-6 text-3xl font-bold">還有其他問題嗎？</h2>
                        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                            如果您沒有找到想要的答案，或需要更詳細的說明，
                            歡迎直接聯絡我們，我們的專業團隊會立即為您服務。
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link href="/contact" className="flex items-center">
                                <Button
                                    size="lg"
                                    className="shadow-hover hover:shadow-card transition-all duration-300"
                                >
                                    聯絡我們
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                className="cursor-pointer border-0 transition-all duration-300"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                <span>{companyInfo.localPhone}</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Quick Tips */}
            <section className="mt-20">
                <h2 className="text-primary mb-12 text-center text-3xl font-bold">實用小提醒</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="group hover:shadow-hover shadow-card border-0 transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                                <span className="text-primary font-bold">💡</span>
                            </div>
                            <h3 className="text-primary mb-3 text-lg font-semibold">憑證整理</h3>
                            <p className="text-muted-foreground text-sm">
                                建議每月定期整理憑證，按日期順序分類，這樣可以大幅提升記帳效率。
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-hover shadow-card border-0 transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                                <span className="text-primary font-bold">📅</span>
                            </div>
                            <h3 className="text-primary mb-3 text-lg font-semibold">申報時程</h3>
                            <p className="text-muted-foreground text-sm">
                                各項稅務申報都有固定期限，建議提前準備相關資料避免延誤申報。
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-hover shadow-card border-0 transition-all duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                                <span className="text-primary font-bold">💼</span>
                            </div>
                            <h3 className="text-primary mb-3 text-lg font-semibold">定期檢視</h3>
                            <p className="text-muted-foreground text-sm">
                                建議每季檢視財務報表，瞭解營運狀況並適時調整經營策略。
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
