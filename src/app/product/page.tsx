import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, CheckCircle, FileText, Star, Users } from "lucide-react";
import Link from "next/link";

const Product = () => {
    const products = [
        {
            id: 3,
            icon: FileText,
            title: "稅務申報代理",
            description: "協助處理各種稅務申報，確保合規並優化稅務負擔",
            features: [
                "營業稅",
                "營所稅",
                "各類所得",
                "綜所稅",
                "遺贈稅",
                "房地合一稅",
                "外僑綜所稅",
                "決清算",
            ],
            popular: true,
        },
        {
            id: 1,
            icon: Calculator,
            title: "企業記帳服務",
            description: "專業記帳人員為您處理日常帳務，確保稅務、財務資料完整準確",
            features: [
                "稅務報表編製",
                "財務報表編製",
                "憑證整理入帳",
                "日常帳務處理",
                "工作底稿編製",
            ],
            popular: false,
        },
        {
            id: 2,
            icon: Calculator,
            title: "機關團體記帳服務",
            description: "專業記帳人員為機關團體處理日常帳務，確保稅務、財務資料完整準確",
            features: [
                "預算表編製",
                "決算表、收支餘絀表編製",
                "結算表申報",
                "各類所得扣繳申報",
                "結餘經費運用計畫書編製",
            ],
            popular: false,
        },
        {
            id: 5,
            icon: Users,
            title: "設立變更登記",
            description: "協助處理公司設立、變更登記等相關事務",
            features: ["稅籍登記", "公司行號設立", "變更登記", "國稅局營業登記"],
            popular: false,
        },
        {
            id: 4,
            icon: Users,
            title: "薪資計算管理",
            description: "精確的薪資計算服務，包含勞健保、所得稅等相關作業",
            features: [
                "薪資計算作業",
                "勞健保申報",
                "二代健保計算",
                "薪資清冊製作",
                "員工所得申報",
            ],
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">服務項目</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        提供完整的稅務、財務服務解決方案，從基礎記帳到進階稅務、財務顧問，
                        滿足不同規模企業的需求，讓您專注於事業發展。
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {products.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={service.id}
                                className={`relative group hover:shadow-hover transition-all duration-300 border-0 shadow-card ${
                                    service.popular
                                        ? "ring-2 ring-primary/20 border-2 border-gray-300"
                                        : ""
                                }`}
                            >
                                {service.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-primary text-primary-foreground shadow-soft">
                                            <Star className="h-3 w-3 mr-1" />
                                            最受歡迎
                                        </Badge>
                                    </div>
                                )}

                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <IconComponent className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-primary mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                                        {service.features.map((feature, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-3"
                                                >
                                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                                    <span className="text-sm text-foreground">
                                                        {feature}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Additional products */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">
                        其他專業服務
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <FileText className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                    稅務協商
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    提供專業的稅務協商服務，協助企業解決稅務爭議
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Service Process */}
                <section className="mb-20 bg-gradient-card rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">服務流程</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                                1
                            </div>
                            <h3 className="font-semibold text-primary mb-2">初次諮詢</h3>
                            <p className="text-sm text-muted-foreground">瞭解企業需求與現況</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                                2
                            </div>
                            <h3 className="font-semibold text-primary mb-2">方案規劃</h3>
                            <p className="text-sm text-muted-foreground">
                                量身打造最適合的服務方案
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                                3
                            </div>
                            <h3 className="font-semibold text-primary mb-2">服務執行</h3>
                            <p className="text-sm text-muted-foreground">專業團隊開始提供服務</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                                4
                            </div>
                            <h3 className="font-semibold text-primary mb-2">定期檢討</h3>
                            <p className="text-sm text-muted-foreground">持續優化服務品質</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-primary rounded-3xl p-12 text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-6">準備開始合作了嗎？</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        我們提供免費諮詢服務，讓您瞭解最適合的稅務、財務解決方案。
                        立即聯絡我們，開始您的財務優化之路。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                        <Link href="/contact">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="shadow-hover cursor-pointer"
                            >
                                免費諮詢
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="shadow-hover cursor-pointer"
                            >
                                瞭解我們
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Product;
