import { Button, Card, CardContent } from "@/components/ui";
import { Calculator, CheckCircle, Shield, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-hero py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="mb-6 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                            台灣合格記帳士事務所
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                        專業記帳服務
                        <br />
                        <span className="text-primary">值得信賴的財務夥伴</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        提供企業記帳、稅務申報、薪資計算等全方位財務服務，
                        讓您專注於事業發展，稅務會計、財務管理交給我們。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="items-center">
                            <Button
                                size="lg"
                                className="shadow-hover hover:shadow-card transition-all duration-300"
                            >
                                立即諮詢
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button
                                variant="outline"
                                size="lg"
                                className="hover:shadow-soft transition-all duration-300"
                            >
                                瞭解服務
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            為什麼選擇惠揚記帳士事務所？
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            我們致力於提供最專業、最可靠的稅務、財務服務，成為您事業成功的重要支柱。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Calculator className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-4">
                                    專業記帳
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    完整的企業記帳服務，確保您的財務資料準確無誤，符合法規要求。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-4">
                                    合規保障
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    專業團隊確保所有財務作業符合台灣法規，降低企業稅務風險。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <TrendingUp className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-4">
                                    財務優化
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    提供專業建議，協助企業優化財務結構，提升營運效率。
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 px-4 bg-gradient-card">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            完整服務項目
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            從基礎記帳到進階稅務顧問，提供企業各階段所需的專業服務。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mt-1">
                                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-2">
                                        企業記帳服務
                                    </h3>
                                    <p className="text-muted-foreground">
                                        專業記帳人員為您處理日常帳務，確保財務資料完整準確。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mt-1">
                                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-2">
                                        稅務申報代理
                                    </h3>
                                    <p className="text-muted-foreground">
                                        協助處理各種稅務申報，確保合規並優化稅務負擔。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mt-1">
                                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-2">
                                        薪資計算管理
                                    </h3>
                                    <p className="text-muted-foreground">
                                        精確的薪資計算服務，包含勞健保、所得稅等相關作業。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="shadow-card border-0 lg:ml-8">
                            <CardContent className="p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <Star className="h-6 w-6 text-accent-gold" />
                                    <h3 className="text-xl font-semibold text-primary">
                                        專業顧問服務
                                    </h3>
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    我們的資深團隊提供企業財務規劃、內控制度建立、稅務風險等專業建議，協助您的事業穩健成長。
                                </p>
                                <Link href="/services">
                                    <Button className="w-full">瞭解更多服務</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-primary text-primary-foreground">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">準備開始合作了嗎？</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        聯絡我們獲得免費諮詢，讓專業團隊為您量身打造最適合的稅務、財務服務方案。
                    </p>
                    <Link href="/contact">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="shadow-hover hover:shadow-card transition-all duration-300"
                        >
                            立即聯絡我們
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
