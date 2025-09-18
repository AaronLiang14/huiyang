import { companyInfo } from '@/constants/companyInfo';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import logo from '../../public/logo.jpg';
import Image from 'next/image';

const Footer = () => {
    const quickLinks = [
        { name: '服務項目', path: '/services' },
        { name: '關於我們', path: '/about' },
        { name: '常見問題', path: '/faq' },
        { name: '聯絡我們', path: '/contact' },
        { name: '專業文章', path: '/blog' },
    ];

    return (
        <footer className="bg-trust-navy text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src={logo} alt="Logo" className="h-8 w-8" />
                            <div>
                                <div className="font-semibold text-lg">{companyInfo.name}</div>
                                <div className="text-sm opacity-80">專業稅務、財務服務</div>
                            </div>
                        </div>
                        <p className="text-sm opacity-90 leading-relaxed">
                            提供專業記帳、報稅、薪資計算及企業諮詢服務，
                            以誠信、專業、效率為理念，成為您最信賴的稅務、財務夥伴。
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">快速連結</h3>
                        <div className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="block text-sm opacity-90 hover:opacity-100 hover:text-accent-gold transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">服務項目</h3>
                        <div className="space-y-3 text-sm opacity-90">
                            <div>企業記帳服務</div>
                            <div>稅務申報代理</div>
                            <div>薪資計算管理</div>
                            <div>稅務諮詢顧問</div>
                            <div>公司設立登記</div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">聯絡資訊</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm">
                                <Phone className="h-4 w-4 opacity-70" />
                                <span className="opacity-90">{companyInfo.localPhone}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Phone className="h-4 w-4 opacity-70" />
                                <span className="opacity-90">{companyInfo.cellPhone}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Mail className="h-4 w-4 opacity-70" />
                                <span className="opacity-90">{companyInfo.email}</span>
                            </div>
                            <div className="flex items-start space-x-3 text-sm">
                                <MapPin className="h-4 w-4 opacity-70 mt-0.5" />
                                <span className="opacity-90">{companyInfo.address}</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        {/* <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent-gold hover:text-trust-navy transition-all duration-200"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent-gold hover:text-trust-navy transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div> */}
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
                    <p>&copy; 2025 惠揚記帳士事務所. 版權所有.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
