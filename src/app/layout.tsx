import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageContainer } from "@/components/PageContainer";
import { ScrollToTop } from "@/components/ScrollToTop";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "惠揚記帳士事務所 - 台灣專業記帳士服務",
    description:
        "台灣專業記帳士服務，提供記帳、報稅、薪資計算、企業諮詢等全方位稅務、財務服務。值得信賴的稅務、財務夥伴。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ScrollToTop />
                <Header />
                <PageContainer>{children}</PageContainer>
                <Footer />
            </body>
        </html>
    );
}
