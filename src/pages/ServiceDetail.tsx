import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  AlertTriangle, 
  ShieldCheck, 
  Activity, 
  FileText, 
  User, 
  Calendar, 
  ExternalLink, 
  ShieldAlert,
  Zap,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { 
  RiskStatusCard, 
  MetricCard, 
  ComplianceCard 
} from '@/components/Cards';
import { 
  RiskTrendChart, 
  BiasHeatmap, 
  PerformanceChart, 
  ComplianceChart 
} from '@/components/Charts';
import { 
  mockAIServices, 
  mockRiskAssessments, 
  mockTechnicalValidations, 
  complianceData 
} from '@/data/index';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { IMAGES } from '@/assets/images';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find related data based on ID
  const service = mockAIServices.find(s => s.id === id) || mockAIServices[0];
  const assessment = mockRiskAssessments.find(a => a.serviceId === service.id) || mockRiskAssessments[0];
  const validation = mockTechnicalValidations.find(v => v.serviceId === service.id) || mockTechnicalValidations[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPERATING': return 'bg-chart-3 text-white';
      case 'DEVELOPING': return 'bg-chart-2 text-white';
      case 'PLANNING': return 'bg-muted text-muted-foreground';
      case 'EMERGENCY_STOP': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'CRITICAL': return 'text-destructive';
      case 'HIGH': return 'text-orange-500';
      case 'MEDIUM': return 'text-yellow-500';
      case 'LOW': return 'text-chart-3';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold tracking-tight">{service.name}</h1>
                <Badge className={getStatusColor(service.status)}>
                  {service.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">ID: {service.id} • 관리 책임자: {service.owner}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" /> 리포트 다운로드
            </Button>
            {service.status !== 'EMERGENCY_STOP' && (
              <Button variant="destructive" className="gap-2">
                <ShieldAlert className="w-4 h-4" /> 긴급 정지
              </Button>
            )}
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            title="종합 위험 등급"
            value={service.riskLevel}
            unit=""
            icon={AlertTriangle}
            color={getRiskColor(service.riskLevel)}
          />
          <MetricCard 
            title="컴플라이언스 준수율"
            value={service.complianceRate}
            unit="%"
            trend="UP"
            trendValue="4.2%"
            icon={ShieldCheck}
          />
          <MetricCard 
            title="보안성 점수"
            value={validation.securityScore}
            unit="/100"
            icon={ShieldAlert}
          />
          <MetricCard 
            title="설명 가능성 점수"
            value={validation.explainabilityScore}
            unit="%"
            icon={Activity}
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">종합 개요</TabsTrigger>
            <TabsTrigger value="governance">거버넌스 & 컴플라이언스</TabsTrigger>
            <TabsTrigger value="technical">기술 검증 상세</TabsTrigger>
            <TabsTrigger value="monitoring">실시간 모니터링</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>서비스 정의 및 리스크 요약</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="space-y-1">
                      <span className="text-sm font-medium text-muted-foreground">카테고리</span>
                      <p className="font-semibold">{service.category}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-medium text-muted-foreground">최종 업데이트</span>
                      <p className="font-semibold">{new Date(service.lastUpdated).toLocaleDateString('ko-KR')}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" /> 주요 위험 식별 포인트
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <Badge variant="outline" className="text-destructive border-destructive">고영향 AI</Badge>
                        <span>금융 심사 모델로서 의사결정의 편향성이 고객의 경제적 권리에 직접적 영향 미침</span>
                      </li>
                      <li className="flex gap-2">
                        <Badge variant="outline" className="text-orange-500 border-orange-500">데이터 민감도</Badge>
                        <span>개인 신용 정보 및 금융 거래 내역 포함으로 인한 PII 유출 위험 존재</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle>위험 추이 분석</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <RiskTrendChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <img src={IMAGES.RISK_TECH_4} alt="Technical Detail" className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>알고리즘 무결성</CardTitle>
                  <CardDescription>학습 데이터와 모델 구조의 기술적 안전성 지표</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>모델 정확도 (Accuracy)</span>
                          <span className="font-bold">94.2%</span>
                        </div>
                        <Progress value={94.2} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>재현율 (Recall)</span>
                          <span className="font-bold">89.5%</span>
                        </div>
                        <Progress value={89.5} className="h-2" />
                      </div>
                   </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img src={IMAGES.DATA_VIZ_7} alt="Monitoring" className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>운영 가시성</CardTitle>
                  <CardDescription>실시간 서비스 운영 및 탐지 현황</CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                        <div className="flex items-center gap-3">
                          <Activity className="w-5 h-5 text-chart-3" />
                          <div>
                            <p className="text-sm font-medium">현재 처리 속도</p>
                            <p className="text-xs text-muted-foreground">평균 120ms / request</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Normal</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                        <div className="flex items-center gap-3">
                          <ShieldAlert className="w-5 h-5 text-destructive" />
                          <div>
                            <p className="text-sm font-medium">미처리 보안 위협</p>
                            <p className="text-xs text-muted-foreground">지난 24시간 내 0건</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-chart-3 border-chart-3">Clear</Badge>
                      </div>
                   </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-primary" /> Compliance 체크리스트
                  </CardTitle>
                  <CardDescription>주요 법령 및 내부 가이드라인 준수 현황</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessment.checklist.map((item) => (
                      <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg border bg-background/50">
                        {item.isMet ? (
                          <CheckCircle2 className="w-5 h-5 text-chart-3 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium">{item.requirement}</p>
                          <p className="text-xs text-muted-foreground mt-1">관련 근거: {item.lawReference}</p>
                        </div>
                        <Badge variant={item.isMet ? "secondary" : "destructive"}>
                          {item.isMet ? "준수" : "미준수"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>자동 생성 고지 문구 (sLLM Agent)</CardTitle>
                    <CardDescription>소비자 보호법에 의거한 AI 서비스 이용 고지</CardDescription>
                  </CardHeader>
                  <CardContent className="bg-primary/5 p-6 rounded-lg border-primary/20 border">
                    <p className="text-sm italic leading-relaxed text-foreground">
                      "{assessment.automaticNotice}"
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm" variant="link" className="text-primary">
                        문구 수정하기 <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>법규별 대응 현황</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[250px]">
                    <ComplianceChart data={complianceData} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Technical Validation Tab */}
          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Bias Map</CardTitle>
                  <CardDescription>학습 데이터 내 주요 속성별 편향성 측정 결과</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <BiasHeatmap data={validation.biasMetrics} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>XAI Feature Heatmap</CardTitle>
                  <CardDescription>의사결정에 영향을 미치는 주요 변수 가시화 (SHAP Value)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {validation.xaiHeatmap.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-mono text-xs">{item.feature}</span>
                          <span className="font-bold">{(item.impact * 100).toFixed(1)}%</span>
                        </div>
                        <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.impact * 100}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="h-full bg-chart-1"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Red Teaming Log</CardTitle>
                <CardDescription>적대적 공격 시나리오별 보안 취약점 리포트</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {validation.redTeamingLog.map((log, idx) => (
                    <div key={idx} className="p-4 rounded-xl border bg-background space-y-3">
                      <div className="flex justify-between items-center">
                        <Badge variant={log.status === 'PASSED' ? 'outline' : 'destructive'} className={log.status === 'PASSED' ? 'text-chart-3 border-chart-3' : ''}>
                          {log.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-sm">{log.scenario}</h4>
                      <p className="text-xs text-muted-foreground">{log.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>모델 성능 모니터링 (Drift Detection)</CardTitle>
                  <CardDescription>운영 중인 모델의 정확도 추이 및 컨셉 드리프트 감지</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <PerformanceChart />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>실시간 알림 로그</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold">데이터 분포 변화 감지</p>
                        <p className="text-xs text-muted-foreground">연령대별 대출 신청 분포가 학습 데이터와 15% 이상 차이 발생</p>
                        <span className="text-[10px] text-muted-foreground mt-1 block">방금 전</span>
                      </div>
                    </div>
                    <div className="flex gap-3 p-3 rounded-lg bg-chart-3/10 border border-chart-3/20">
                      <CheckCircle2 className="w-5 h-5 text-chart-3 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold">정기 재검증 완료</p>
                        <p className="text-xs text-muted-foreground">2026-01-30 정기 거버넌스 체크 통과</p>
                        <span className="text-[10px] text-muted-foreground mt-1 block">2시간 전</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-destructive">Emergency Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">위험 지표 임계치 도달 시 자동 조치 설정</p>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="w-full justify-start text-destructive hover:bg-destructive/10">
                        <ShieldAlert className="w-4 h-4 mr-2" /> 실시간 차단 모드 활성화
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" /> 수동 개입 승인 요청
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
