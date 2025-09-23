"use client";

import { Button, Card, CardContent, Input, Label, Textarea } from "@/components/ui";
import { companyInfo } from "@/constants/companyInfo";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.from("contactInfo").insert({
            created_at: new Date().toISOString(),
            ...formData,
        });
        if (error) {
            toast({
                variant: "destructive",
                title: "提交失敗",
                description: "請稍後再試，或聯絡我們的客服人員。",
                duration: 4000,
            });
        } else {
            toast({
                title: "訊息已送出",
                description: "我們會在24小時內回覆您，謝謝！",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: "",
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-20">
            {/* Header */}
            <div className="mb-16 text-center">
                <h1 className="text-primary mb-6 text-4xl font-bold md:text-5xl">聯絡我們</h1>
                <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
                    我們很樂意為您服務！無論您有任何問題或需要專業建議，
                    請隨時與我們聯絡，我們會盡快回覆您。
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="shadow-card border-0">
                        <CardContent className="p-8">
                            <h2 className="text-primary mb-6 text-2xl font-bold">聯絡表單</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">姓名 *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="border border-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">電子信箱 *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="border border-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">聯絡電話 *</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            required
                                            onChange={handleInputChange}
                                            className="border border-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">公司名稱</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="border border-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="service">需要的服務</Label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="bg-background w-full rounded-lg border border-gray-400 px-3 py-2"
                                    >
                                        <option value="">請選擇服務項目</option>
                                        <option value="tax">稅務申報代理</option>
                                        <option value="companyBookkeeping">企業記帳服務</option>
                                        <option value="institutionBookkeeping">
                                            機關團體記帳服務
                                        </option>
                                        <option value="registration">設立變更登記</option>
                                        <option value="payroll">薪資計算管理</option>
                                        <option value="other">其他服務</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">訊息內容</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="border border-gray-400"
                                        placeholder="請詳細說明您的需求或問題..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="hover:shadow-hover w-full cursor-pointer transition-all duration-300"
                                >
                                    <Send className="mr-2 h-4 w-4" />
                                    送出訊息
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    {/* Contact Details */}
                    <Card className="shadow-card border-0">
                        <CardContent className="p-8">
                            <h3 className="text-primary mb-6 text-xl font-bold">聯絡資訊</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 mt-1 flex h-10 w-10 items-center justify-center rounded-lg">
                                        <Phone className="text-primary h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-medium">電話</p>
                                        <p className="text-muted-foreground">
                                            {companyInfo.localPhone}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            週一至週五 9:00-18:00
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 mt-1 flex h-10 w-10 items-center justify-center rounded-lg">
                                        <Mail className="text-primary h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-medium">電子信箱</p>
                                        <p className="text-muted-foreground">{companyInfo.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 mt-1 flex h-10 w-10 items-center justify-center rounded-lg">
                                        <MapPin className="text-primary h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-medium">地址</p>
                                        <p className="text-muted-foreground">
                                            {companyInfo.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 mt-1 flex h-10 w-10 items-center justify-center rounded-lg">
                                        <Clock className="text-primary h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-medium">營業時間</p>
                                        <p className="text-muted-foreground">
                                            週一至週五 9:00-18:00
                                        </p>
                                        <p className="text-muted-foreground">週六 9:00-12:00</p>
                                        <p className="text-muted-foreground text-sm">
                                            週日及國定假日休息
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Response */}
                    <Card className="shadow-card bg-gradient-card border-0">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-primary mb-4 text-xl font-bold">24小時快速回應</h3>
                            <p className="text-muted-foreground mb-6">
                                我們承諾在收到您的訊息後24小時內回覆， 緊急問題可直接致電洽詢。
                            </p>
                            <Button asChild variant="outline" size="sm">
                                <a href={`tel:${companyInfo.localPhone}`}>立即致電</a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Map Placeholder */}
            <section className="">
                <Card className="shadow-card border-0">
                    <CardContent className="p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7148131517574!2d121.52033097553392!3d25.043750577810133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a970fe800629%3A0x3d942e9127a042aa!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5p6X5qOu5Y2X6LevNC0z6Jmf!5e0!3m2!1szh-TW!2stw!4v1753886511232!5m2!1szh-TW!2stw"
                            className="mt-12 h-96 w-full rounded-lg shadow-lg"
                            loading="lazy"
                        ></iframe>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default Contact;
