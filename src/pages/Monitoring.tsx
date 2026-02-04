import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  AlertTriangle, 
  ShieldAlert, 
  Zap, 
  Play, 
  Square, 
  RefreshCw, 
  Clock,
  ChevronRight,
  Search
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PerformanceChart } from "@/components/Charts";
import { MetricCard } from "@/components/Cards";
import { mockAIServices } from "@/data/index";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { toast } from "sonner";
import { IMAGES } from "@/assets/images";

export default function Monitoring() {
  const [isEmergencyStopping, setIsEmergencyStopping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const operatingServices = mockAIServices.filter(s => s.status === "OPERATING");
  const emergencyStopped = mockAIServices.filter(s => s.status === "EMERGENCY_STOP");

  const handleEmergencyStop = (serviceName: string) => {
    setIsEmergencyStopping(true);
    setTimeout(() => {
      setIsEmergencyStopping(false);
      toast.error(`${serviceName} 서비스가 긴급 중지되었습니다.`, {
        description: "보안 취약점 및 성능 저하가 감지되어 시스템에 의해 차단되었습니다.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">실시간 AI 모니터링</h1>
            <p className="text-muted-foreground mt-2">
              운영 중인 AI 모델의 성능 저하(Drift)와 이상 징후를 실시간으로 탐지하고 제어합니다.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border px-4 py-2 rounded-lg shadow-sm">
            <div className="flex flex-col items-end">
              <span className="text-xs text-muted-foreground font-medium">현재 시스템 시각</span>
              <span className="text-sm font-mono font-bold">
                {currentTime.toLocaleTimeString("ko-KR")}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="실시간 데이터 드리프트"
            value="12.4"
            unit="%"
            trend="UP"
            trendValue="2.1%"
            icon={Activity}
            color="oklch(0.65 0.14 195)"
          />
          <MetricCard
            title="미처리 위험 알림"
            value="3"
            unit="건"
            trend="DOWN"
            trendValue="1건"
            icon={AlertTriangle}
            color="oklch(0.62 0.17 35)"
          />
          <MetricCard
            title="평균 추론 지연 시간"
            value="142"
            unit="ms"
            trend="STABLE"
            icon={Zap}
            color="oklch(0.52 0.18 265)"
          />
          <MetricCard
            title="시스템 가동률"
            value="99.98"
            unit="%"
            trend="STABLE"
            icon={ShieldAlert}
            color="oklch(0.68 0.16 150)"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Performance Monitoring Area */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden border-border shadow-md">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">성능 모니터링 (Performance & Drift)</CardTitle>
                    <CardDescription>최근 24시간 동안의 모델 정확도 및 드리프트 추이</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-background">Live</Badge>
                    <Badge variant="secondary">전체 서비스 통합</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[350px] w-full">
                  <PerformanceChart />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-bold">운영 서비스 상태 목록</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="서비스 검색..." 
                    className="w-full bg-background border border-input rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>서비스명</TableHead>
                      <TableHead>상태</TableHead>
                      <TableHead>정확도</TableHead>
                      <TableHead>위험 지수</TableHead>
                      <TableHead className="text-right">액션</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAIServices.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${service.status === 'OPERATING' ? 'bg-emerald-500' : service.status === 'EMERGENCY_STOP' ? 'bg-destructive' : 'bg-amber-500'}`} />
                            <span className="text-xs font-semibold">
                              {service.status === 'OPERATING' ? '정상 운영' : service.status === 'EMERGENCY_STOP' ? '긴급 중지' : '평가 중'}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 w-24">
                            <span className="text-xs text-muted-foreground">{service.complianceRate}%</span>
                            <Progress value={service.complianceRate} className="h-1" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={service.riskLevel === 'HIGH' || service.riskLevel === 'CRITICAL' ? 'destructive' : 'outline'}
                            className="text-[10px]"
                          >
                            {service.riskLevel}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {service.status === 'OPERATING' ? (
                              <Button 
                                size="sm" 
                                variant="destructive" 
                                className="h-8 px-2"
                                onClick={() => handleEmergencyStop(service.name)}
                                disabled={isEmergencyStopping}
                              >
                                <Square className="w-3 h-3 mr-1" /> 중지
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" className="h-8 px-2">
                                <Play className="w-3 h-3 mr-1" /> 재가동
                              </Button>
                            )}
                            <Button size="sm" variant="ghost" className="h-8 px-2">
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Alerts & Escalation */}
          <div className="space-y-6">
            <Card className="border-destructive/30 shadow-lg">
              <CardHeader className="bg-destructive/5 border-b border-destructive/10">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <CardTitle className="text-lg">긴급 보안 알림 (PII Leak)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm font-semibold text-destructive mb-1">개인 식별 정보 노출 위험 감지</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    [신용대출 심사 AI] 모델의 추론 로그에서 마스킹되지 않은 주민등록번호 패턴이 감지되었습니다.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="destructive" size="sm" className="w-full">자동 필터링 활성</Button>
                    <Button variant="outline" size="sm" className="w-full">상세 분석</Button>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/30">
                  <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-1">성능 저하 주의보</p>
                  <p className="text-xs text-muted-foreground">
                    [고객 상담 챗봇]의 할루시네이션(Hallucination) 지수가 임계치(0.15)를 초과하였습니다.
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-muted-foreground">감지 시각: 23:25:01</span>
                    <span className="text-amber-600">조치 대기 중</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  최근 인시던트 로그
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0 border-border">
                    <div className="mt-1">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-medium">모델 버전 업데이트 완료</span>
                        <span className="text-[10px] text-muted-foreground">2시간 전</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {i === 1 ? '대출 심사 모델 v2.4 배포가 성공적으로 완료되었습니다.' : i === 2 ? '인사 스크리닝 서비스 정기 점검이 완료되었습니다.' : '배송 알고리즘 긴급 패치가 적용되었습니다.'}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  전체 로그 보기 <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <div className="relative rounded-xl overflow-hidden group">
               <img 
                src={IMAGES.RISK_TECH_5} 
                alt="Security Monitoring" 
                className="w-full h-40 object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-bold">AI Security Scan</p>
                <p className="text-[10px] text-muted-foreground">24/7 Red Teaming Active</p>
              </div>
              <div className="absolute top-4 right-4">
                <RefreshCw className="w-4 h-4 animate-spin text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
