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
        <div className="min-h-screen py-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">聯絡我們</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        我們很樂意為您服務！無論您有任何問題或需要專業建議，
                        請隨時與我們聯絡，我們會盡快回覆您。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-card border-0">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-primary mb-6">聯絡表單</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">姓名 *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="border-border"
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
                                                className="border-border"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">聯絡電話</Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="border-border"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">公司名稱</Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="border-border"
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
                                            className="w-full px-3 py-2 border border-border rounded-lg bg-background"
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
                                            className="border-border"
                                            placeholder="請詳細說明您的需求或問題..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full hover:shadow-hover transition-all duration-300"
                                    >
                                        <Send className="h-4 w-4 mr-2" />
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
                                <h3 className="text-xl font-bold text-primary mb-6">聯絡資訊</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary">電話</p>
                                            <p className="text-muted-foreground">
                                                {companyInfo.localPhone}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                週一至週五 9:00-18:00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary">電子信箱</p>
                                            <p className="text-muted-foreground">
                                                {companyInfo.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary">地址</p>
                                            <p className="text-muted-foreground">
                                                {companyInfo.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                                            <Clock className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary">營業時間</p>
                                            <p className="text-muted-foreground">
                                                週一至週五 9:00-18:00
                                            </p>
                                            <p className="text-muted-foreground">週六 9:00-12:00</p>
                                            <p className="text-sm text-muted-foreground">
                                                週日及國定假日休息
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Response */}
                        <Card className="shadow-card border-0 bg-gradient-card">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold text-primary mb-4">
                                    24小時快速回應
                                </h3>
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
                                className="w-full h-96 rounded-lg shadow-lg mt-12"
                                loading="lazy"
                            ></iframe>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
};

export default Contact;
