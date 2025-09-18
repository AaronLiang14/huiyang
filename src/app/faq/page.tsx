"use client";
import { Button, Card, CardContent } from "@/components/ui";
import { companyInfo } from "@/constants/companyInfo";
import { ChevronDown, ChevronUp, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FAQ = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const faqs = [
        {
            category: "服務相關",
            items: [
                {
                    question: "你們提供哪些服務？",
                    answer: "我們提供完整的稅務、財務服務，包括企業記帳、稅務申報代理、薪資計算管理、企業諮詢顧問等。另外也協助公司設立登記、輔導財務、稅務簽證等專業服務。",
                },
                {
                    question: "服務的收費方式是什麼？",
                    answer: "我們的收費方式依據服務項目和企業規模而定。一般採用月費制，根據記帳資料量、稅務申報頻率等因素計算。詳細報價可聯絡我們進行諮詢。",
                },
                {
                    question: "服務範圍包括哪些行業？",
                    answer: "我們服務的行業非常廣泛，包括但不限於製造業、零售業、餐飲業、科技業、服務業等。無論您是機關團體、新創公司或成熟企業，我們都能提供適合的稅務、財務解決方案。",
                },
                {
                    question: "可以只委託部分服務嗎？",
                    answer: "當然可以！我們提供彈性的服務組合，您可以根據企業需求選擇單一服務項目，如只委託記帳或只委託稅務申報，我們會為您量身打造最適合的服務方案。",
                },
                {
                    question: "開始服務需要準備什麼資料？",
                    answer: "需要準備公司登記證明文件、營業登記證、負責人身分證件、銀行開戶資料、前期稅務、財務報表（如有）以及相關憑證資料等。我們會提供詳細的資料清單協助您準備。",
                },
            ],
        },
        {
            category: "技術與安全",
            items: [
                {
                    question: "如何確保我們的財務資料安全？",
                    answer: "我們使用專業的會計軟體系統，所有資料都有加密保護和定期備份。同時嚴格遵守保密協議，只有指定的專責人員可以接觸您的資料，確保資訊安全。",
                },
                {
                    question: "如果需要緊急處理怎麼辦？",
                    answer: "我們提供緊急服務支援，營業時間外可透過電話或LINE聯絡。緊急稅務申報或特殊狀況處理，我們會優先安排處理，確保不影響您的營運。",
                },
            ],
        },
        {
            category: "稅務相關",
            items: [
                {
                    question: "可以協助節稅規劃嗎？",
                    answer: "當然可以！我們的專業團隊會分析您的營運模式，提供合法的節稅建議，包括費用列報優化、投資抵減運用、營運模式調整等，協助您降低稅務負擔。",
                },
                {
                    question: "如果被稅務機關查核怎麼辦？",
                    answer: "我們會全程協助應對稅務查核，包括資料準備、說明文件撰寫、陪同接受查核等。憑藉豐富的經驗，我們將盡全力幫助您完成查核程序。",
                },
                {
                    question: "稅務申報有時間限制嗎？",
                    answer: "是的，各種稅務申報都有法定期限。一般營業稅為每2個月申報一次，營所稅年度申報期限為隔年5月底前。我們會提前準備並按時申報，絕不延誤。",
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">常見問題</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        這裡整理了客戶最常詢問的問題與答案，希望能快速解決您的疑問。
                        如果找不到您要的答案，歡迎直接聯絡我們。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <HelpCircle className="h-6 w-6 mr-3" />
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
                                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors rounded-lg"
                                                >
                                                    <h3 className="text-lg font-semibold text-primary pr-4">
                                                        {faq.question}
                                                    </h3>
                                                    {isOpen ? (
                                                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                                                    )}
                                                </button>

                                                {isOpen && (
                                                    <div className="px-6 pb-6">
                                                        <div className="border-t border-border pt-4">
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
                    <Card className="shadow-card border-0 bg-gradient-card">
                        <CardContent className="p-12 text-center">
                            <h2 className="text-3xl font-bold text-primary mb-6">
                                還有其他問題嗎？
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                如果您沒有找到想要的答案，或需要更詳細的說明，
                                歡迎直接聯絡我們，我們的專業團隊會立即為您服務。
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                                    className="hover:shadow-soft transition-all duration-300"
                                >
                                    <Phone className="h-4 w-4 mr-2" />
                                    <span>{companyInfo.localPhone}</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Quick Tips */}
                <section className="mt-20">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">
                        實用小提醒
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary font-bold">💡</span>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-3">
                                    憑證整理
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    建議每月定期整理憑證，按日期順序分類，這樣可以大幅提升記帳效率。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary font-bold">📅</span>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-3">
                                    申報時程
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    各項稅務申報都有固定期限，建議提前準備相關資料避免延誤申報。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary font-bold">💼</span>
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-3">
                                    定期檢視
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    建議每季檢視財務報表，瞭解營運狀況並適時調整經營策略。
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FAQ;
