import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Activity, FileCheck, Zap, ArrowRight, CheckCircle2, AlertTriangle, Search, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MetricCard, RiskStatusCard } from "@/components/Cards";
import { IMAGES } from "@/assets/images";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center border-b border-border">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.DASHBOARD_HERO_1}
              alt="AI Risk Management Dashboard"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>2026 AI 거버넌스 오케스트레이터 솔루션</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                AI의 신뢰성, <br />
                <span className="text-primary">데이터로 증명</span>하십시오.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-10 max-w-2xl">
                단순한 체크리스트를 넘어 AI 모델의 생애주기 전반을 데이터 기반으로 감시하는
                'AI Governance Orchestrator'를 통해 규제 대응과 기술적 안전성을 동시에 확보하십시오.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/demo')}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  데모 시작하기 <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold border border-border hover:bg-accent transition-all">
                  솔루션 소개서 다운로드
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3-Layer Architecture Section */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">3-Layer Integrated Architecture</h2>
              <p className="text-muted-foreground">기획부터 운영까지, 빈틈없는 위험 관리 체계를 제안합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Governance Layer",
                  desc: "법령(AI기본법, 소보법 등) DB를 기반으로 기획 단계의 적합성을 선제적으로 판단합니다.",
                  icon: FileCheck,
                  features: ["법령 준수 자동 매핑", "고영향 AI 판별", "Compliance 가이드"]
                },
                {
                  title: "Technical Validation",
                  desc: "데이터와 모델을 직접 분석하여 편향성, 보안성(레드티밍), 설명 가능성을 측정합니다.",
                  icon: ShieldCheck,
                  features: ["Data Bias Map", "Red Teaming Log", "XAI Heatmap"]
                },
                {
                  title: "Monitoring Layer",
                  desc: "운영 중인 모델의 성능 저하(Drift)와 이상 징후를 실시간으로 탐지하여 사고를 예방합니다.",
                  icon: Activity,
                  features: ["Real-time Drift Detection", "Incident Escalation", "자동 긴급 정지"]
                }
              ].map((layer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <layer.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{layer.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{layer.desc}</p>
                  <ul className="mt-auto space-y-3">
                    {layer.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights with Real UI components */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">실시간 위험 커맨드 센터</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  전사 AI 서비스의 위험 상태를 한눈에 파악하십시오.
                  신호등 시스템(Green, Yellow, Red)을 통해 즉각적인 의사결정을 지원하며,
                  규제 대응 현황을 시각화하여 보고 업무를 자동화합니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MetricCard
                    title="운영 중인 서비스"
                    value={42}
                    unit="개"
                    trend="UP"
                    trendValue="12%"
                    icon={Activity}
                    color="primary"
                  />
                  <MetricCard
                    title="평균 위험 지수"
                    value={24}
                    unit="pts"
                    trend="DOWN"
                    trendValue="5%"
                    icon={AlertTriangle}
                    color="destructive"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl" />
                <div className="relative space-y-4">
                  <RiskStatusCard
                    title="신용평가 AI 모델 v2.0"
                    description="금융 소비자 보호법 준수 및 편향성 검증 필요"
                    level="HIGH"
                    serviceCount={1}
                  />
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-lg">
                    <img
                      src={IMAGES.DATA_VIZ_1}
                      alt="Data Visualization Preview"
                      className="w-full h-48 object-cover rounded-lg mb-4 opacity-80"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">전사 규제 준수율</span>
                      <span className="text-primary font-bold">94.2%</span>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary h-full w-[94.2%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section className="py-24 bg-foreground text-background overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <img src={IMAGES.RISK_TECH_3} className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-8">지능형 자동화 기술</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">AI Scanners</h4>
                    <p className="text-muted-foreground/80">소스코드와 데이터셋을 자동 스캔하여 개인식별정보(PII) 노출 및 보안 취약점을 탐지합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">sLLM Governance Agent</h4>
                    <p className="text-muted-foreground/80">최신 판례와 가이드라인이 업데이트되면, 기존 서비스 정의서를 대조하여 위험 요소를 재평가합니다.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Incident Escalation</h4>
                    <p className="text-muted-foreground/80">모델 정확도 급락 혹은 유해 문구 생성 시 즉시 알림을 발송하고 필요시 서비스를 '긴급 정지'합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-[2rem] p-12 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">지금 바로 AI 안전성을 확보하십시오.</h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                전문가 상담을 통해 귀사의 AI 서비스에 최적화된 거버넌스 프레임워크를 제안해 드립니다.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold hover:bg-white/90 transition-all">
                  전문가와 상담하기
                </button>
                <button className="px-10 py-5 bg-primary-foreground/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  무료 체험 신청
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-xl">AI Sentinel</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2026 AI Sentinel Corp. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">이용약관</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">개인정보처리방침</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">고객지원</a>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
