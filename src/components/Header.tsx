"use client";
import { companyInfo } from "@/constants/companyInfo";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/logo.jpg";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "首頁", path: "/" },
        { name: "服務項目", path: "/product" },
        { name: "專業文章", path: "/blog" },
        { name: "關於我們", path: "/about" },
        { name: "常見問題", path: "/faq" },
        { name: "聯絡我們", path: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full">
            <nav className="bg-white/95 shadow backdrop-blur-sm">
                <div className="w-full px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center space-x-2">
                            <div className="group-hover:shadow-hover rounded-lg p-2 transition-all duration-300">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-primary text-lg font-semibold">
                                    {companyInfo.name}
                                </span>
                                <div className="text-muted-foreground text-xs">
                                    專業 • 信賴 • 效率
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center space-x-1 md:flex">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`hover:bg-accent hover:text-foreground rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        isActive(item.path)
                                            ? "bg-primary text-primary-foreground"
                                            : "text-foreground"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="hover:bg-accent rounded-lg p-2 transition-colors md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="border-t bg-white md:hidden">
                            <div className="space-y-2 py-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                            isActive(item.path)
                                                ? "bg-primary text-primary-foreground"
                                                : "text-foreground hover:bg-accent hover:text-foreground"
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};
