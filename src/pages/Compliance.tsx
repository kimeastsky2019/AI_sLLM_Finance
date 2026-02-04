import React from "react";
import { Layout } from "../components/Layout";
import {
  MetricCard,
  ComplianceCard,
} from "../components/Cards";
import { ComplianceChart } from "../components/Charts";
import { complianceData } from "../data/index";
import { IMAGES } from "../assets/images";
import {
  ShieldCheck,
  AlertTriangle,
  FileText,
  Globe,
  History,
  ExternalLink,
  Scale,
  Gavel,
} from "lucide-react";
import { motion } from "framer-motion";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "../lib/motion";

const Compliance = () => {
  const totalCompliance = Math.round(
    complianceData.reduce((acc, curr) => acc + curr.complianceRate, 0) / complianceData.length
  );

  const totalMandatory = complianceData.reduce((acc, curr) => acc + curr.mandatoryCount, 0);
  const totalCompleted = complianceData.reduce((acc, curr) => acc + curr.completedCount, 0);

  return (
    <Layout>
      <div className="space-y-8 p-6 lg:p-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-primary/5 border border-primary/10 p-8 lg:p-12">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={springPresets.gentle}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Global Compliance Engine
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  AI 규제 및 컴플라이언스 관리
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  대한민국 AI 기본법부터 EU AI Act, 금융소비자 보호법까지 전 세계 주요 규제 대응 현황을 실시간으로 추적하고 관리합니다. 2026년 최신 가이드라인이 시스템에 자동으로 반영되어 있습니다.
                </p>
              </motion.div>
            </div>
            <div className="hidden lg:block w-72 h-48">
              <img
                src={IMAGES.COMPLIANCE_8}
                alt="Compliance"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transform rotate-3"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </section>

        {/* Top Metrics */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <motion.div variants={staggerItem}>
            <MetricCard
              title="전체 규제 준수율"
              value={totalCompliance}
              unit="%"
              trend="UP"
              trendValue="3.2%"
              icon={ShieldCheck}
              color="oklch(0.68 0.16 150)"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <MetricCard
              title="전체 이행 항목"
              value={`${totalCompleted}/${totalMandatory}`}
              unit="개"
              trend="STABLE"
              icon={Scale}
              color="oklch(0.52 0.18 265)"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <MetricCard
              title="미결 위험 이슈"
              value={totalMandatory - totalCompleted}
              unit="건"
              trend="DOWN"
              trendValue="2건"
              icon={AlertTriangle}
              color="oklch(0.55 0.18 25)"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <MetricCard
              title="규제 업데이트"
              value="12"
              unit="건"
              trend="UP"
              trendValue="최근 30일"
              icon={History}
              color="oklch(0.65 0.14 195)"
            />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Compliance Chart & Details */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold">법령별 대응 현황 분석</h2>
                  <p className="text-sm text-muted-foreground">주요 법적 요구사항에 대한 달성률 시각화</p>
                </div>
                <button className="p-2 hover:bg-muted rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div className="h-[400px] w-full">
                <ComplianceChart data={complianceData} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {complianceData.map((data, idx) => (
                <motion.div
                  key={data.lawName}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springPresets.gentle, delay: idx * 0.1 }}
                >
                  <ComplianceCard {...(data as any)} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar: Guidelines & Updates */}
          <div className="space-y-6">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-6 overflow-hidden relative"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-primary" />
                  최신 규제 동향 리포트
                </h3>
                <div className="space-y-4">
                  {[ 
                    { title: "EU AI Act 최종 승인 및 시행 가이드라인", date: "2026-01-28", category: "Global" },
                    { title: "금융권 AI 알고리즘 투명성 확보 방안", date: "2026-01-25", category: "Finance" },
                    { title: "개인정보보호법 개정안(제3자 전송권)", date: "2026-01-15", category: "Privacy" },
                    { title: "생성형 AI 저작권 분쟁 판례 분석", date: "2026-01-05", category: "Legal" }
                  ].map((item, i) => (
                    <div key={i} className="group cursor-pointer p-3 rounded-xl hover:bg-muted transition-all border border-transparent hover:border-border">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-primary/10 text-primary">{item.category}</span>
                        <span className="text-[10px] text-muted-foreground">{item.date}</span>
                      </div>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">{item.title}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-accent transition-colors">
                  모든 가이드라인 보기
                </button>
              </div>
              <img src={IMAGES.DATA_VIZ_9} className="absolute bottom-0 right-0 w-32 opacity-5 pointer-events-none" alt="decoration" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-primary text-primary-foreground rounded-3xl p-6"
            >
              <h3 className="text-lg font-bold mb-2">sLLM Governance Agent</h3>
              <p className="text-sm opacity-90 mb-6">
                새로운 판례나 가이드라인이 업데이트되면, 기존 서비스 정의서와 대조하여 위험 요소를 자동으로 재평가합니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs">현재 4,281개의 글로벌 규제 항목 모니터링 중</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                  <FileText className="w-4 h-4 opacity-70" />
                  <span className="text-xs">최근 자동 업데이트: 2시간 전</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 rounded-xl bg-white text-primary text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg">
                자동 규제 분석 시작
              </button>
            </motion.div>

            <div className="bg-card border border-border rounded-3xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-destructive/10 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">긴급 준수 권고</h3>
                  <p className="text-xs text-muted-foreground">즉각적인 조치가 필요한 항목</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                EU AI Act Art.14(인적 개입권 보장)에 따라 고영향 AI 서비스의 운영 프로세스 수정이 필요합니다.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-destructive text-destructive-foreground text-xs font-bold">
                  이행 계획 수립
                </button>
                <button className="px-4 py-2 rounded-lg border border-border text-xs font-medium">
                  상세보기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Footer Message */}
        <footer className="text-center py-10 opacity-50">
          <p className="text-sm italic">
            본 시스템은 2026-01-30 기준 최신 법률 정보를 바탕으로 정보를 제공하며, 최종 법적 판단은 전문 법무 검토를 권장합니다.
          </p>
          <p className="text-xs mt-2">© 2026 AI Governance Orchestrator Sentinel. All Rights Reserved.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default Compliance;
