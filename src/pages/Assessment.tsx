import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { RiskAssessmentForm } from "@/components/Forms";
import { MetricCard, ComplianceCard } from "@/components/Cards";
import { complianceData, mockRiskAssessments } from "@/data/index";
import { 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  Info,
  Zap,
  Gavel
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Assessment() {
  const [assessmentResult, setAssessmentResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFormSubmit = (data: any) => {
    setIsProcessing(true);
    // 시뮬레이션: 고영향 AI 판별 로직 (금융, 채용, 의료 등은 고영향으로 분류)
    setTimeout(() => {
      const highImpactCategories = ["finance_loan", "hr_recruitment", "medical_diag"];
      const isHigh = highImpactCategories.includes(data.category);
      
      setAssessmentResult({
        ...data,
        isHighImpact: isHigh,
        score: isHigh ? 65 : 95,
        notice: isHigh 
          ? `본 서비스는 [${data.serviceName}]을(를) 위해 AI 기술을 활용합니다. 귀하의 데이터는 공정하게 처리되며, 자동화된 결정에 대해 이의를 제기할 권리가 있습니다.`
          : "본 서비스는 사용자 편의를 위해 보조적인 AI 기능을 포함하고 있습니다.",
        checklist: [
          { id: "c1", label: "알고리즘 공정성 검토", status: isHigh ? "pending" : "completed", law: "AI기본법" },
          { id: "c2", label: "개인정보 영향평가", status: "completed", law: "개인정보보호법" },
          { id: "c3", label: "이용자 고지 의무", status: "pending", law: "소비자보호법" },
          { id: "c4", label: "인적 개입 절차 수립", status: isHigh ? "pending" : "not_applicable", law: "EU AI Act" }
        ]
      });
      setIsProcessing(false);
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }, 800);
  };

  return (
    <Layout>
      <div className="space-y-8 pb-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI 서비스 위험성 평가</h1>
            <p className="text-muted-foreground mt-2">
              신규 AI 서비스 기획 단계에서 고영향 AI 여부를 판별하고 규제 준수 사항을 자동 생성합니다.
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="px-3 py-1 bg-primary/5 border-primary/20 text-primary">
              <Zap className="w-3 h-3 mr-1" /> sLLM 거버넌스 에이전트 가동 중
            </Badge>
          </div>
        </div>

        {/* Dashboard Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="평가 대기 서비스"
            value={3}
            unit="건"
            icon={FileText}
            color="text-primary"
          />
          <MetricCard
            title="고영향 AI 판정률"
            value={42}
            unit="%"
            trend="UP"
            trendValue="5%"
            icon={AlertTriangle}
            color="text-destructive"
          />
          <MetricCard
            title="평균 컴플라이언스 점수"
            value={88}
            unit="점"
            trend="STABLE"
            icon={ShieldCheck}
            color="text-chart-3"
          />
          <MetricCard
            title="최근 24시간 업데이트"
            value={12}
            unit="건"
            icon={CheckCircle2}
            color="text-chart-2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Assessment Form (Left) */}
          <div className="lg:col-span-7">
            <Card className="border-border shadow-sm">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-primary" />
                  고영향 AI 판별 마법사
                </CardTitle>
                <CardDescription>
                  서비스 목적과 데이터 성격을 기반으로 규제 등급을 자동 산출합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <RiskAssessmentForm onSubmit={handleFormSubmit} />
              </CardContent>
            </Card>
          </div>

          {/* Compliance Info (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">주요 규제 대응 현황</CardTitle>
                <CardDescription>글로벌 및 국내 AI 법령 준수율</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {complianceData.map((item) => (
                  <ComplianceCard key={item.lawName} {...(item as any)} />
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/10">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  평가 가이드라인
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-2 text-muted-foreground">
                <p>• 금융, 의료, 인사 채용 분야는 자동적으로 '고영향 AI'로 분류될 가능성이 높습니다.</p>
                <p>• EU AI Act 및 국내 AI기본법 초안에 근거한 알고리즘 투명성 확보가 필수적입니다.</p>
                <p>• 평가 결과는 sLLM 에이전트에 의해 실시간 법령 DB와 대조됩니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Assessment Result Display (Bottom) */}
        <AnimatePresence>
          {assessmentResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Separator className="my-8" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* AI Impact Determination Result */}
                <Card className={assessmentResult.isHighImpact ? "border-destructive/30 bg-destructive/5" : "border-chart-3/30 bg-chart-3/5"}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>위험성 판별 결과</span>
                      <Badge variant={assessmentResult.isHighImpact ? "destructive" : "outline"} className="uppercase">
                        {assessmentResult.isHighImpact ? "고영향 AI (High Risk)" : "저위험 AI (Low Risk)"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-background rounded-lg border border-border/50">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        자동 생성된 소비자 고지 문구
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        "{assessmentResult.notice}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-1">컴플라이언스 점수</p>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${assessmentResult.score}%` }}
                            className={`h-full ${assessmentResult.score > 80 ? 'bg-chart-3' : 'bg-destructive'}`}
                          />
                        </div>
                      </div>
                      <span className="font-bold text-lg">{assessmentResult.score}점</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Compliance Checklist */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">필수 이행 Checklist</CardTitle>
                    <CardDescription>관련 법령 매핑을 통한 준수 필요 항목</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px] pr-4">
                      <div className="space-y-3">
                        {assessmentResult.checklist.map((item: any) => (
                          <div key={item.id} className="flex items-start justify-between p-3 rounded-md bg-muted/20 border border-border/30">
                            <div className="space-y-1">
                              <p className="text-sm font-medium">{item.label}</p>
                              <p className="text-xs text-muted-foreground font-mono">근거: {item.law}</p>
                            </div>
                            <Badge 
                              variant={item.status === 'completed' ? 'outline' : item.status === 'pending' ? 'destructive' : 'secondary'}
                              className="text-[10px]"
                            >
                              {item.status === 'completed' ? '준수 완료' : item.status === 'pending' ? '조치 필요' : '해당 없음'}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end gap-3">
                <Badge variant="secondary" className="cursor-pointer">PDF 리포트 다운로드</Badge>
                <Badge variant="default" className="cursor-pointer">거버넌스 승인 요청</Badge>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
