import { companyInfo } from "@/constants/companyInfo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.jpg";
import Image from "next/image";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "首頁", path: "/" },
        { name: "服務項目", path: "/services" },
        { name: "專業文章", path: "/blog" },
        { name: "關於我們", path: "/about" },
        { name: "常見問題", path: "/faq" },
        { name: "聯絡我們", path: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-2 rounded-lg group-hover:shadow-hover transition-all duration-300">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-12 w-12 object-cover rounded-full"
                            />
                        </div>
                        <div>
                            <span className="text-lg font-semibold text-primary">
                                {companyInfo.name}
                            </span>
                            <div className="text-xs text-muted-foreground">專業 • 信賴 • 效率</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${
                                    isActive(item.path)
                                        ? "bg-primary text-primary-foreground shadow-soft"
                                        : "text-foreground"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-border bg-card">
                        <div className="py-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive(item.path)
                                            ? "bg-primary text-primary-foreground"
                                            : "text-foreground hover:bg-accent hover:text-accent-foreground"
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
    );
};

export default Navigation;
