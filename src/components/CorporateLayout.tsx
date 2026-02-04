
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import gngLogo from '@/assets/gng_logo.png';
import { ROUTE_PATHS } from '@/lib';

interface CorporateLayoutProps {
    children: React.ReactNode;
}

export function CorporateLayout({ children }: CorporateLayoutProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src={gngLogo} alt="GnG International Logo" className="h-10 w-auto object-contain" />
                        <span className="text-xl font-bold tracking-tight text-[#0B1C3E] dark:text-white">GnG International</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Solutions</a>
                        <a href="#platform" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Platform</a>
                        <Link to={ROUTE_PATHS.INFO} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Company</Link>
                        <button
                            onClick={() => navigate(ROUTE_PATHS.PRODUCT_AI_SENTINEL)}
                            className="px-5 py-2.5 bg-[#0B1C3E] text-white rounded-lg text-sm font-semibold hover:bg-[#1E3A8A] transition-all flex items-center gap-2 shadow-lg shadow-primary/10"
                        >
                            Get Started <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-lg font-medium">
                            <a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
                            <a href="#platform" onClick={() => setIsMenuOpen(false)}>Platform</a>
                            <Link to={ROUTE_PATHS.INFO} onClick={() => setIsMenuOpen(false)}>Company</Link>
                            <Link to={ROUTE_PATHS.PRODUCT_AI_SENTINEL} onClick={() => setIsMenuOpen(false)} className="text-primary">
                                Product Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Corporate Footer */}
            <footer className="bg-[#0B1C3E] text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-sm">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <img src={gngLogo} alt="GnG Logo" className="h-8 w-auto brightness-0 invert" />
                                <span className="text-xl font-bold">GnG International</span>
                            </div>
                            <h4 className="font-bold text-white text-lg mb-4">주식회사 지앤지인터내셔널 <span className="text-sm font-normal text-gray-400 ml-2">GnG International Co., Ltd.</span></h4>
                            <p className="mb-2 text-gray-400"><span className="font-semibold text-gray-300 w-24 inline-block">대표자</span> 김동호</p>
                            <p className="mb-2 text-gray-400"><span className="font-semibold text-gray-300 w-24 inline-block">사업자번호</span> 625-88-02407</p>
                            <p className="mb-2 text-gray-400"><span className="font-semibold text-gray-300 w-24 inline-block">설립일</span> 2021년 10월 29일</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6">Location</h4>
                            <div className="mb-6">
                                <span className="font-semibold text-gray-300 block mb-1">본점 (Headquarters)</span>
                                <p className="text-gray-400 leading-relaxed">
                                    경기도 성남시 분당구 판교로289번길 20, 2동 5층<br />
                                    (삼평동, 판교테크노밸리 스타트업 캠퍼스)
                                </p>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-300 block mb-1">공장 (Factory/Lab)</span>
                                <p className="text-gray-400 leading-relaxed">
                                    서울시 금천구 범안로 1126 716호
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
                        <p>© 2026 GnG International Inc. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
