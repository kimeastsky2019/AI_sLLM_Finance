import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  ShieldCheck, 
  Activity, 
  Brain, 
  ArrowUpRight, 
  AlertTriangle, 
  Layers, 
  FileCheck,
  Search
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { 
  RiskStatusCard, 
  ServiceCard, 
  MetricCard, 
  ComplianceCard 
} from "@/components/Cards";
import { 
  RiskTrendChart, 
  ComplianceChart 
} from "@/components/Charts";
import { 
  mockAIServices, 
  complianceData 
} from "@/data/index";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Dashboard() {
  // 통계 계산
  const totalServices = mockAIServices.length;
  const highRiskCount = mockAIServices.filter(s => s.riskLevel === "HIGH" || s.riskLevel === "CRITICAL").length;
  const avgCompliance = Math.round(complianceData.reduce((acc, curr) => acc + curr.complianceRate, 0) / complianceData.length);
  const activeMonitoring = mockAIServices.filter(s => s.status === "OPERATING").length;

  return (
    <Layout>
      <div className="flex flex-col gap-8 pb-12">
        {/* 상단 헤더 및 검색 */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Risk Command Center</h1>
            <p className="text-muted-foreground mt-1">
              전사 AI 거버넌스 및 위험 관리 현황 (마지막 업데이트: 2026-01-30 23:31)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="서비스 또는 법령 검색..."
                className="pl-10 pr-4 py-2 bg-card border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <FileCheck className="h-4 w-4" />
              보고서 생성
            </Button>
          </div>
        </header>

        {/* 핵심 메트릭 그리드 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            title="전체 AI 서비스"
            value={totalServices}
            unit="개"
            icon={Brain}
            color="text-primary"
          />
          <MetricCard 
            title="고위험군 탐지"
            value={highRiskCount}
            unit="건"
            trend="UP"
            trendValue="12%"
            icon={ShieldAlert}
            color="text-destructive"
          />
          <MetricCard 
            title="평균 컴플라이언스"
            value={avgCompliance}
            unit="%"
            trend="UP"
            trendValue="3%"
            icon={ShieldCheck}
            color="text-chart-3"
          />
          <MetricCard 
            title="실시간 모니터링"
            value={activeMonitoring}
            unit="개"
            icon={Activity}
            color="text-chart-2"
          />
        </section>

        {/* 전사 AI 위험 신호등 및 주요 트렌드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <RiskStatusCard 
              level="MEDIUM"
              title="전사 통합 위험 지수: 주의"
              description="금융소비자 보호법 개정안 반영 및 고영향 AI 서비스의 기술 검증 보완이 필요합니다."
              serviceCount={highRiskCount}
            />
          </div>
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>월별 위험 및 안전성 추이</CardTitle>
                  <CardDescription>최근 6개월간의 리스크 탐지 및 거버넌스 준수율</CardDescription>
                </div>
                <Badge variant="outline">실시간 업데이트</Badge>
              </div>
            </CardHeader>
            <CardContent className="h-[300px]">
              <RiskTrendChart />
            </CardContent>
          </Card>
        </div>

        {/* 단계별 병목 구간 및 규제 대응 현황 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                <CardTitle>단계별 리스크 평가 병목 구간</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[ 
                { stage: "기획 (고영향 판별)", status: "COMPLETED", count: 12, color: "bg-chart-3" },
                { stage: "개발 (기술 검증)", status: "IN_PROGRESS", count: 8, color: "bg-chart-4", active: true },
                { stage: "운영 (모니터링)", status: "PENDING", count: 5, color: "bg-muted" },
                { stage: "사후 관리 (재평가)", status: "PENDING", count: 2, color: "bg-muted" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.stage}</span>
                    <span className="text-muted-foreground">{item.count}개 서비스 대기 중</span>
                  </div>
                  <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.count / 27) * 100}%` }}
                      className={`h-full ${item.color} ${item.active ? 'animate-pulse' : ''}`}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground italic">
                * 현재 '기술 검증' 단계에서 다수의 금융 AI 서비스가 데이터 편향성 테스트를 대기 중입니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                <CardTitle>글로벌 규제 준수율 (Compliance)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ComplianceChart data={complianceData} />
            </CardContent>
          </Card>
        </div>

        {/* 주요 법령 준수 카드 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceData.map((compliance, idx) => (
            <ComplianceCard key={idx} {...(compliance as any)} />
          ))}
        </section>

        {/* 관리 대상 고위험 서비스 목록 */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                집중 관리 대상 (High Risk Services)
              </h2>
              <p className="text-sm text-muted-foreground">위험도가 'HIGH' 이상이거나 긴급 정지된 서비스 목록입니다.</p>
            </div>
            <Button variant="link" className="gap-1 text-primary">
              전체 서비스 보기 <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAIServices
              .filter(s => s.riskLevel === "HIGH" || s.riskLevel === "CRITICAL" || s.status === "EMERGENCY_STOP")
              .map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </section>

        {/* 하단 배너: AI 거버넌스 오케스트레이터 소개 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-64 flex items-center p-8 mt-4"
        >
          <img 
            src={IMAGES.DATA_VIZ_3} 
            alt="Governance Orchestrator Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">Feature: sLLM Governance Agent</Badge>
            <h3 className="text-2xl font-bold mb-2">지능형 규제 대응 자동화</h3>
            <p className="text-muted-foreground mb-6">
              최신 판례나 가이드라인이 업데이트되면, 기존 서비스 정의서와 대조하여 위험 요소를 자동으로 재평가합니다. 
              복잡한 컴플라이언스 관리를 AI가 직접 수행합니다.
            </p>
            <div className="flex gap-3">
              <Button>에이전트 실행</Button>
              <Button variant="outline">업데이트 내역</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
