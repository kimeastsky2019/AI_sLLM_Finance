
import React from 'react';
import { motion } from 'framer-motion';
import { CorporateLayout } from '@/components/CorporateLayout';
import { IMAGES } from '@/assets/images';
import { ArrowRight, Shield, Database, BrainCircuit, CheckCircle, Smartphone, Building2, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib';

export default function CompanyHome() {
    const navigate = useNavigate();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <CorporateLayout>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={IMAGES.CORPORATE_HERO}
                        alt="Abstract Data Wave"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1C3E]/5 text-[#0B1C3E] border border-[#0B1C3E]/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#0B1C3E] animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide">Next-Gen Data Intelligence</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl font-bold text-[#0B1C3E] leading-tight mb-8 tracking-tight">
                            Orchestrating <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Data Intelligence.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                            GnG International은 데이터의 가치를 증명하고, AI의 신뢰를 설계합니다.<br />
                            앤터프라이즈를 위한 완벽한 데이터 거버넌스와 맞춤형 AI 솔루션을 경험하세요.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate(ROUTE_PATHS.PRODUCT_AI_SENTINEL)}
                                className="px-8 py-4 bg-[#0B1C3E] text-white rounded-xl font-bold hover:bg-[#1E3A8A] transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                솔루션 살펴보기 <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white text-[#0B1C3E] border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                                기업 도입 문의
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section id="solutions" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold text-[#0B1C3E] mb-4">Our Core Solutions</h2>
                        <p className="text-slate-600">
                            기업의 데이터 라이프사이클 전반을 아우르는 GnG International만의 통합 솔루션을 소개합니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Solution 1: AI Sentinel */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                            onClick={() => navigate(ROUTE_PATHS.PRODUCT_AI_SENTINEL)}
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1E3A8A] mb-8 group-hover:scale-110 transition-transform">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0B1C3E] mb-4">AI Sentinel</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                AI 모델의 생애주기를 감시하고 규제 위험을 관리하는 거버넌스 오케스트레이터입니다.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['AI 기본법 준수 자동화', '데이터 편향성 분석', '실시간 성능 모니터링'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                                        <CheckCircle className="w-4 h-4 text-blue-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-[#1E3A8A] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>

                        {/* Solution 2: Data Fabric */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform">
                                <Database className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0B1C3E] mb-4">Data Fabric</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                복잡한 기업 내 데이터 사일로를 연결하여 단일한 진실 공급원(Single Source of Truth)을 구축합니다.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['이기종 데이터 통합', '메타데이터 자동 관리', '데이터 카탈로그'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                                        <CheckCircle className="w-4 h-4 text-indigo-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>

                        {/* Solution 3: On-Premise LLM */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                                <BrainCircuit className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0B1C3E] mb-4">Secure LLM</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                데이터 유출 걱정 없는 폐쇄망 전용 sLLM 구축으로 기업의 지식 자산을 안전하게 활용합니다.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['폐쇄망 구축 지원', '도메인 특화 Fine-tuning', 'RAG 파이프라인 최적화'].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                                        <CheckCircle className="w-4 h-4 text-emerald-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats / Trust Section */}
            <section className="py-24 bg-[#0B1C3E] text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: 'Enterprise Clients', value: '50+' },
                            { label: 'Data Processed', value: '1.2PB+' },
                            { label: 'AI Models Governed', value: '200+' },
                            { label: 'Success Rate', value: '99.9%' }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400">{stat.value}</div>
                                <div className="text-blue-200/60 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Domain Expertise */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-bold text-[#0B1C3E] mb-6">
                                산업별 특화된<br />
                                <span className="text-blue-600">데이터 인사이트</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                금융, 제조, 공공 등 각 도메인에 최적화된 데이터 모델링과 분석 파이프라인을 제공합니다.
                                GnG International의 전문가들은 귀사의 비즈니스 문맥을 깊이 이해하고 있습니다.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-4 p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                                        <Building2 className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-[#0B1C3E]">금융 (Finance)</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-[#0B1C3E]">IT / 플랫폼</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 border rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-[#0B1C3E]">공공 (Public)</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative h-[500px]">
                            {/* Abstract visualization placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden">
                                <div className="absolute inset-0 opacity-20" style={{
                                    backgroundImage: 'radial-gradient(circle at 2px 2px, #1E3A8A 1px, transparent 0)',
                                    backgroundSize: '32px 32px'
                                }}></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 mix-blend-multiply"></div>
                                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-20 mix-blend-multiply"></div>
                            </div>
                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-20 right-20 bg-white p-6 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm max-w-[240px]"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-sm font-bold text-slate-800">Risk Score</div>
                                </div>
                                <div className="text-2xl font-bold text-[#0B1C3E] mb-1">98.5</div>
                                <div className="text-xs text-green-600">+2.4% vs last week</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-20 bg-white p-6 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm max-w-[240px]"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                                        <Database className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="text-sm font-bold text-slate-800">Compliance</div>
                                </div>
                                <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-blue-600"></div>
                                </div>
                                <div className="mt-2 text-xs text-slate-500">System Status: Optimal</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </CorporateLayout>
    );
}
