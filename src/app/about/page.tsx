import boss from "@/../public/boss.jpg";
import eric from "@/../public/eric.jpg";
import { Badge, Card, CardContent } from "@/components/ui";
import { Award, Heart, Target } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            {/* Header */}
            <div className="mb-16 text-center">
                <h1 className="text-primary mb-6 text-4xl font-bold md:text-5xl">關於我們</h1>
                <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
                    惠揚記帳士事務所致力於為台灣中小企業提供專業、可靠的稅務申報服務。
                    我們秉持「專業、誠信、效率」的經營理念，成為您最信賴的夥伴。
                </p>
            </div>

            {/* Company Values */}
            <section className="mb-20">
                <h2 className="text-primary mb-12 text-center text-3xl font-bold">
                    我們的核心價值
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="border-0 shadow transition-all duration-300">
                        <CardContent className="p-8 text-center">
                            <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                                <Award className="text-primary h-8 w-8" />
                            </div>
                            <h3 className="text-primary mb-4 text-xl font-semibold">專業</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                持續精進專業知識，確保提供最新最準確的稅務、財務服務。
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow transition-all duration-300">
                        <CardContent className="p-8 text-center">
                            <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                                <Heart className="text-primary h-8 w-8" />
                            </div>
                            <h3 className="text-primary mb-4 text-xl font-semibold">誠信</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                以誠待人，建立長期信任關係，為客戶利益著想。
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow transition-all duration-300">
                        <CardContent className="p-8 text-center">
                            <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                                <Target className="text-primary h-8 w-8" />
                            </div>
                            <h3 className="text-primary mb-4 text-xl font-semibold">效率</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                運用科技工具提升作業效率，為客戶節省時間成本。
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-20">
                <h2 className="text-primary mb-12 text-center text-3xl font-bold">專業團隊</h2>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <Card className="shadow-card border-0">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-6">
                                <div className="bg-gradient-hero flex h-20 w-20 items-center justify-center rounded-2xl">
                                    <Image
                                        src={boss}
                                        alt="boss"
                                        className="w-full rounded-xl object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-primary mb-2 text-xl font-semibold">
                                        王月惠
                                    </h3>
                                    <p className="text-primary mb-3 font-medium">
                                        事務所負責人 / 執業記帳士
                                    </p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        <Badge variant="secondary">記帳士證照</Badge>
                                        <Badge variant="secondary">稅務專精</Badge>
                                        <Badge variant="secondary">審計專精</Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        擁有20年以上的稅務及財務經驗，專精於中小企業稅務優化與財務規劃，
                                        協助超過150家企業建立完善的制度。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-card border-0">
                        <CardContent className="p-8">
                            <div className="flex items-start space-x-6">
                                <div className="bg-gradient-hero flex h-20 w-20 items-center justify-center rounded-2xl">
                                    <Image
                                        src={eric}
                                        alt="eric"
                                        className="w-full rounded-xl object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-primary mb-2 text-xl font-semibold">
                                        梁百揚
                                    </h3>
                                    <p className="text-primary mb-3 font-medium">工商部門主管</p>
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        <Badge variant="secondary">不動產經紀人</Badge>
                                        <Badge variant="secondary">登記變更</Badge>
                                        <Badge variant="secondary">勞健保專精</Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        專精於登記變更及人資管理，熟悉各種產業的帳務處理，
                                        以細心負責的態度確保每筆帳務的準確性。
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Certifications */}
            <section className="bg-gradient-card mb-20 rounded-3xl p-12">
                <h2 className="text-primary mb-12 text-center text-3xl font-bold">專業認證</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                    <div className="text-center">
                        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
                            <Award className="text-primary h-8 w-8" />
                        </div>
                        <h3 className="text-primary mb-2 font-semibold">記帳士證照</h3>
                        <p className="text-muted-foreground text-sm">專業記帳資格</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
                            <Award className="text-primary h-8 w-8" />
                        </div>
                        <h3 className="text-primary mb-2 font-semibold">不動產經紀人</h3>
                        <p className="text-muted-foreground text-sm">不動產相關業務</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
                            <Award className="text-primary h-8 w-8" />
                        </div>
                        <h3 className="text-primary mb-2 font-semibold">持續教育</h3>
                        <p className="text-muted-foreground text-sm">定期進修更新</p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="text-center">
                <h2 className="text-primary mb-8 text-3xl font-bold">我們的使命</h2>
                <div className="mx-auto max-w-4xl">
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        我們致力於成為台灣中小企業最值得信賴的稅務、財務服務夥伴，
                        透過專業的服務與創新的解決方案，協助企業建立健全的財務體質，
                        專注於核心業務發展，共同創造成功的未來。
                    </p>
                    <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                        <div>
                            <div className="text-primary mb-2 text-3xl font-bold">99+</div>
                            <p className="text-muted-foreground">服務企業</p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 text-3xl font-bold">20年</div>
                            <p className="text-muted-foreground">專業經驗</p>
                        </div>
                        <div>
                            <div className="text-primary mb-2 text-3xl font-bold">100%</div>
                            <p className="text-muted-foreground">客戶滿意度</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
