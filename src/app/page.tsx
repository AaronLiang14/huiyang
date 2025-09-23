import { Button, Card, CardContent } from "@/components/ui";
import { Calculator, CheckCircle, Shield, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-hero relative px-4 py-20">
                <div className="container mx-auto text-center">
                    <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-white/80 px-6 py-3 shadow backdrop-blur-sm">
                        <Shield className="text-primary h-5 w-5" />
                        <span className="text-primary text-sm font-medium">
                            台灣合格記帳士事務所
                        </span>
                    </div>

                    <h1 className="text-primary mb-6 text-4xl leading-tight font-bold md:text-6xl">
                        專業記帳服務
                        <br />
                        <span className="text-primary">值得信賴的財務夥伴</span>
                    </h1>

                    <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
                        提供企業記帳、稅務申報、薪資計算等全方位財務服務，
                        讓您專注於事業發展，稅務會計、財務管理交給我們。
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/contact" className="items-center">
                            <Button
                                size="lg"
                                className="cursor-pointer transition-all duration-300"
                            >
                                立即諮詢
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button
                                variant="outline"
                                size="lg"
                                className="cursor-pointer transition-all duration-300"
                            >
                                瞭解服務
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-20">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
                            為什麼選擇惠揚記帳士事務所？
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            我們致力於提供最專業、最可靠的稅務、財務服務，成為您事業成功的重要支柱。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-0 shadow transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                                    <Calculator className="text-primary h-8 w-8" />
                                </div>
                                <h3 className="text-primary mb-4 text-xl font-semibold">
                                    專業記帳
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    完整的企業記帳服務，確保您的財務資料準確無誤，符合法規要求。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                                    <Shield className="text-primary h-8 w-8" />
                                </div>
                                <h3 className="text-primary mb-4 text-xl font-semibold">
                                    合規保障
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    專業團隊確保所有財務作業符合台灣法規，降低企業稅務風險。
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                                    <TrendingUp className="text-primary h-8 w-8" />
                                </div>
                                <h3 className="text-primary mb-4 text-xl font-semibold">
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
            <section className="bg-gradient-card px-4 py-20">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
                            完整服務項目
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            從基礎記帳到進階稅務顧問，提供企業各階段所需的專業服務。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary mt-1 flex h-8 w-8 items-center justify-center rounded-lg">
                                    <CheckCircle className="text-primary-foreground h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-primary mb-2 text-lg font-semibold">
                                        企業記帳服務
                                    </h3>
                                    <p className="text-muted-foreground">
                                        專業記帳人員為您處理日常帳務，確保財務資料完整準確。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary mt-1 flex h-8 w-8 items-center justify-center rounded-lg">
                                    <CheckCircle className="text-primary-foreground h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-primary mb-2 text-lg font-semibold">
                                        稅務申報代理
                                    </h3>
                                    <p className="text-muted-foreground">
                                        協助處理各種稅務申報，確保合規並優化稅務負擔。
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary mt-1 flex h-8 w-8 items-center justify-center rounded-lg">
                                    <CheckCircle className="text-primary-foreground h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-primary mb-2 text-lg font-semibold">
                                        薪資計算管理
                                    </h3>
                                    <p className="text-muted-foreground">
                                        精確的薪資計算服務，包含勞健保、所得稅等相關作業。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="border-0 lg:ml-8">
                            <CardContent className="p-8">
                                <div className="mb-6 flex items-center space-x-3">
                                    <Star className="text-accent-gold h-6 w-6" />
                                    <h3 className="text-primary text-xl font-semibold">
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
            <section className="bg-primary text-primary-foreground px-4 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">準備開始合作了嗎？</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                        聯絡我們獲得免費諮詢，讓專業團隊為您量身打造最適合的稅務、財務服務方案。
                    </p>
                    <Link href="/contact">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="cursor-pointer transition-all duration-300"
                        >
                            立即聯絡我們
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
