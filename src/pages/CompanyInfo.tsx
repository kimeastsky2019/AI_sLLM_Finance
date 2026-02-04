
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CorporateLayout } from '@/components/CorporateLayout';
import { IMAGES } from '@/assets/images';
import { Shield, Zap, BookOpen, Network, CheckCircle2, Globe2, Building2, MapPin, Download, Share2, TrendingUp, Lightbulb, Users } from 'lucide-react';

export default function CompanyInfo() {
    const [activeTab, setActiveTab] = useState(0);

    // Animation variants
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };
    const slideUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
    const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

    // New "White Light" theme color palette
    const theme = {
        bg: "bg-white",
        textPrimary: "text-slate-900",
        textSecondary: "text-slate-600",
        accent: "text-blue-600",
        sectionBg: "bg-slate-50",
        cardBg: "bg-white"
    };

    const solutions = [
        { title: 'AI Sentinel', desc: 'AI Governance & Risk Management', icon: Shield, features: ['AI 기본법 준수', '위험 평가 자동화', '모델 모니터링'] },
        { title: 'Data Fabric', desc: 'Enterprise Data Integration', icon: Network, features: ['데이터 사일로 제거', '메타데이터 관리', '실시간 파이프라인'] },
        { title: 'Secure LLM', desc: 'Private & On-Premise AI', icon: Zap, features: ['폐쇄망 구축', 'RAG 파이프라인', '도메인 특화 튜닝'] },
        { title: 'AI EduTech', desc: 'Future Education Platform', icon: BookOpen, features: ['맞춤형 학습 분석', '지능형 튜터', 'LMS 연동'] }
    ];

    return (
        <CorporateLayout>
            {/* 1. Hero Section - Updated for White Light Theme */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
                {/* Background Animation Layer - Subtle Particles */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-50 rounded-full blur-[100px] opacity-40 mix-blend-multiply"
                    />
                    <motion.div
                        animate={{ opacity: [0.2, 0.4, 0.2], x: [-20, 20, -20] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[80px] opacity-40 mix-blend-multiply"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="text-left"
                    >
                        <motion.div variants={slideUp} className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6 shadow-sm">
                            <span className="text-blue-700 font-semibold tracking-wider text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                GnG INTERNATIONAL
                            </span>
                        </motion.div>
                        <motion.h1 variants={slideUp} className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900 tracking-tight">
                            Orchestrating<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart Data</span> &<br />
                            Trusted AI
                        </motion.h1>
                        <motion.p variants={slideUp} className="text-xl text-slate-600 max-w-lg mb-8 leading-relaxed font-medium">
                            데이터의 투명성과 AI의 신뢰성을 연결하여,<br />
                            가장 안전하고 지능적인 미래를 설계합니다.
                        </motion.p>
                        <motion.div variants={slideUp} className="flex gap-4">
                            <button onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20">
                                About Us
                            </button>
                            <button className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                                Contact
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }}
                        className="hidden md:flex justify-center relative"
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Use Generated Sketch Hero Image */}
                            <img src={IMAGES.SKETCH_HERO} alt="AI Intelligence Sketch" className="w-full max-w-xl drop-shadow-2xl rounded-2xl border-4 border-white" />
                        </motion.div>

                        {/* Floating Elements for Richness */}
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-800">Growth</div>
                                    <div className="text-xs text-slate-500">+128% YoY</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Overview & Vision - Clean Layout with Icons */}
            <section id="vision" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                    >
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-5"></div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Collaboration"
                                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-sm hidden md:block">
                                <p className="text-lg font-serif italic text-slate-700">"To Orchestrate the World's Data with Trust and Intelligence."</p>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
                                    <div>
                                        <div className="font-bold text-slate-900">Dongho Kim</div>
                                        <div className="text-sm text-slate-500">CEO, GnG International</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <motion.h2 variants={slideUp} className="text-4xl font-bold text-slate-900 mb-8">Who We Are</motion.h2>
                            <motion.p variants={slideUp} className="text-lg text-slate-600 leading-relaxed mb-8">
                                GnG International은 데이터 엔지니어링과 AI 거버넌스 분야를 선도하는 기술 기업입니다.
                                <br /><br />
                                복잡한 엔터프라이즈 환경에서 데이터를 안전하게 연결하고, 설명 가능한 AI(XAI) 기술을 통해 신뢰할 수 있는 인공지능 도입을 가속화합니다. 우리는 기술을 넘어, 사람과 사회에 기여하는 '안전한 혁신'을 추구합니다.
                            </motion.p>

                            <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6">
                                {[
                                    { icon: Lightbulb, title: 'Innovation', desc: '끊임없는 기술 혁신으로 한계를 넘어서는 도전' },
                                    { icon: Users, title: 'Human-Centric', desc: '기술보다 사람을 먼저 생각하는 따뜻한 인공지능' },
                                    { icon: Shield, title: 'Integrity', desc: '모든 데이터 처리 과정에서의 투명성과 윤리 준수' }
                                ].map((item, idx) => (
                                    <motion.div variants={slideUp} key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Business Areas - Using Sketch Images */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 z-0" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-slate-900 mb-4"
                        >
                            Core Business Areas
                        </motion.h2>
                        <p className="text-slate-600 text-lg">우리의 기술이 적용되는 핵심 산업 분야입니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sketch Illustration Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 bg-white mb-8 border border-slate-100 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row items-center"
                        >
                            <div className="w-full md:w-1/2 p-10 bg-blue-50/50">
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Convergence of Technology</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    에너지, 교육, 그리고 클라우드 인프라가 만나는 지점에서<br />
                                    GnG International은 새로운 가치를 창출합니다.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium text-slate-700">Smart Energy</span>
                                    <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-medium text-slate-700">EduTech</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 h-full min-h-[300px] relative">
                                <img src={IMAGES.SKETCH_BUSINESS} alt="Business Sketch" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-50/50" />
                            </div>
                        </motion.div>

                        {[
                            { title: 'Energy & Utility', desc: '스마트 그리드 데이터 분석 및 수요 예측 AI', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
                            { title: 'Future Education', desc: 'LMS 데이터 통합 및 맞춤형 학습 경로 추천', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                            { title: 'Cloud Infra', desc: '대규모 데이터 파이프라인 구축 및 MLOps', icon: Network, color: 'text-blue-500', bg: 'bg-blue-50' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)" }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all group"
                            >
                                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 mb-6">{item.desc}</p>
                                {/* Animated line */}
                                <div className="h-1 w-12 rounded-full bg-slate-200 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. AI Solutions - Light Theme Version */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Our AI Solutions</h2>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Tabs */}
                        <div className="md:w-1/3 flex flex-col gap-3">
                            {solutions.map((sol, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`text-left p-6 rounded-2xl transition-all flex items-center gap-4 border ${activeTab === idx ? 'bg-white border-blue-200 shadow-lg scale-105' : 'bg-white/50 border-transparent hover:bg-white hover:shadow-md'}`}
                                >
                                    <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        <sol.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className={`font-bold text-lg ${activeTab === idx ? 'text-slate-900' : 'text-slate-500'}`}>{sol.title}</div>
                                        <div className="text-xs text-slate-400">{sol.desc}</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Content Panel */}
                        <div className="md:w-2/3 bg-white rounded-3xl border border-slate-200 p-10 relative min-h-[400px] shadow-xl flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full w-fit">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                        <span className="text-blue-800 font-semibold text-sm">Best-in-class Technology</span>
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 text-slate-900">{solutions[activeTab].title}</h3>
                                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">{solutions[activeTab].desc}</p>

                                    <div className="flex flex-wrap gap-4">
                                        {solutions[activeTab].features.map((feat, i) => (
                                            <motion.span
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                key={i}
                                                className="px-5 py-3 bg-slate-50 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 flex items-center gap-2 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors cursor-default"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div> {feat}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative background Icon */}
                            <div className="absolute bottom-5 right-5 opacity-5 pointer-events-none">
                                {React.createElement(solutions[activeTab].icon, { className: "w-64 h-64 text-slate-900" })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Global Network - Sketch Style */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-slate-900 mb-6"
                    >
                        Global Expansion Strategy
                    </motion.h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-16">
                        서울을 넘어 유럽과 중앙아시아로 뻗어나가는 GnG International의 글로벌 여정입니다.
                    </p>

                    <div className="relative mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-3xl shadow-xl overflow-hidden border border-slate-200 bg-white"
                        >
                            <img src={IMAGES.SKETCH_GLOBAL} alt="Global Network Map" className="w-full h-auto object-cover max-h-[600px]" />

                            {/* Overlay Content Nodes (Simulated) */}
                            <div className="absolute top-[30%] left-[20%]"> {/* Europe */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-white p-4 rounded-xl shadow-lg border-2 border-green-500 cursor-pointer"
                                >
                                    <div className="font-bold text-slate-900">Europe</div>
                                    <div className="text-xs text-slate-500">Horizon Project</div>
                                </motion.div>
                            </div>

                            <div className="absolute top-[40%] right-[30%]"> {/* Korea */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-white p-4 rounded-xl shadow-lg border-2 border-blue-500 cursor-pointer"
                                >
                                    <div className="font-bold text-slate-900">Korea (HQ)</div>
                                    <div className="text-xs text-slate-500">R&D Center</div>
                                </motion.div>
                            </div>

                            <div className="absolute bottom-[40%] left-[45%]"> {/* Central Asia */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-white p-4 rounded-xl shadow-lg border-2 border-amber-500 cursor-pointer"
                                >
                                    <div className="font-bold text-slate-900">Central Asia</div>
                                    <div className="text-xs text-slate-500">ODA Expansion</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Company Info (Footer Style) */}
            <section className="bg-slate-900 text-slate-300 py-16 text-sm">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="font-bold text-white text-lg mb-6">주식회사 지앤지인터내셔널<br /><span className="text-base font-normal text-slate-400">GnG International Co., Ltd.</span></h4>
                            <p className="mb-2"><span className="font-semibold w-24 inline-block text-slate-500">대표자</span> 김동호</p>
                            <p className="mb-2"><span className="font-semibold w-24 inline-block text-slate-500">사업자번호</span> 625-88-02407</p>
                            <p className="mb-2"><span className="font-semibold w-24 inline-block text-slate-500">설립일</span> 2021년 10월 29일</p>
                        </div>
                        <div>
                            <h5 className="font-bold text-white mb-4">Location</h5>
                            <div className="mb-4">
                                <span className="font-semibold block mb-1 text-slate-500">본점 (Headquarters)</span>
                                경기도 성남시 분당구 판교로289번길 20, 2동 5층<br />(삼평동, 판교테크노밸리 스타트업 캠퍼스)
                            </div>
                            <div>
                                <span className="font-semibold block mb-1 text-slate-500">공장 (Factory/Lab)</span>
                                서울시 금천구 범안로 1126 716호
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </CorporateLayout>
    );
}
