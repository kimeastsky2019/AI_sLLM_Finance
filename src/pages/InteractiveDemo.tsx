
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
    CheckCircle2,
    ChevronRight,
    Banknote,
    Users,
    MessageSquare,
    ShieldAlert,
    FileText,
    Activity,
    AlertTriangle,
    Play,
    RotateCcw,
    Check,
    ArrowRight,
    ShieldCheck,
    Eye,
    Target,
    Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DEMO_SCENARIOS, DEMO_STEPS, DemoScenarioType } from "@/data/demo_scenarios";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MetricCard } from "@/components/Cards";
import { BiasHeatmap, PerformanceChart } from "@/components/Charts";
import { toast } from "sonner";

// --- Components for each step ---

const ScenarioSelection = ({ onSelect }: { onSelect: (id: DemoScenarioType) => void }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_SCENARIOS.map((scenario) => (
                <motion.div
                    key={scenario.id}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Card
                        className="h-full cursor-pointer hover:border-primary transition-all group"
                        onClick={() => onSelect(scenario.id)}
                    >
                        <CardHeader>
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                {scenario.id === "FINANCE" && <Banknote className="w-6 h-6" />}
                                {scenario.id === "RECRUITMENT" && <Users className="w-6 h-6" />}
                                {scenario.id === "CHATBOT" && <MessageSquare className="w-6 h-6" />}
                            </div>
                            <CardTitle>{scenario.title}</CardTitle>
                            <CardDescription>{scenario.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <span>위험 등급</span>
                                    <Badge variant={scenario.riskLevel === "HIGH" ? "destructive" : "secondary"}>
                                        {scenario.riskLevel}
                                    </Badge>
                                </div>
                                <div className="space-y-1">
                                    {scenario.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-muted-foreground">
                                            <CheckCircle2 className="w-3 h-3 mr-2 text-primary" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full group-hover:bg-primary" variant="outline">
                                선택하기 <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

const RiskAssessmentStep = ({ scenarioId, onNext }: { scenarioId: DemoScenarioType, onNext: () => void }) => {
    const [loading, setLoading] = useState(false);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
            setComplete(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const scenario = DEMO_SCENARIOS.find(s => s.id === scenarioId);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-primary" />
                            고영향 AI 판별 마법사
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">분석 대상</span>
                                <span className="text-sm font-bold text-primary">{scenario?.title}</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span>의사결정 영향도</span>
                                    <Progress value={scenario?.riskLevel === "HIGH" ? 90 : 40} className="w-24 h-2" />
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span>민감 데이터 리</span>
                                    <Progress value={scenario?.riskLevel === "HIGH" ? 85 : 30} className="w-24 h-2" />
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center p-8">
                                <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
                                <span className="ml-3 text-sm text-muted-foreground">법령 데이터베이스 대조 중...</span>
                            </div>
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-bold text-green-700 dark:text-green-400">평가 완료</h4>
                                        <p className="text-xs text-green-600/80 mt-1">
                                            {scenario?.riskLevel === "HIGH"
                                                ? "본 시나리오는 '고위험 AI'로 분류되었습니다. [AI기본법 제 14조]에 의거하여 적합성 평가가 필수적입니다."
                                                : "본 시나리오는 '저위험 AI'로 분류되었습니다. 자율적인 규제 준수가 권장됩니다."}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            자동 생성된 고지문
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border text-sm leading-relaxed font-mono">
                            {loading ? (
                                <div className="space-y-2 animate-pulse">
                                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                                    <div className="h-4 bg-slate-200 rounded w-full" />
                                    <div className="h-4 bg-slate-200 rounded w-5/6" />
                                </div>
                            ) : (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    Testing... [AI Notice Generated]
                                    <br /><br />
                                    본 서비스({scenario?.title})는 인공지능 알고리즘을 활용하여
                                    {scenarioId === 'FINANCE' ? " 신용 등급을 산출합니다." :
                                        scenarioId === 'RECRUITMENT' ? " 지원자의 역량을 평가합니다." :
                                            " 고객님의 문의에 자동 응답합니다."}
                                    <br />
                                    결과에 이의가 있으신 우, 담당자에게 재검토를 요청하실 수 있습니다.
                                    <br />
                                    (근거 법령: AI 기본법 제 22조 3항)
                                </motion.div>
                            )}
                        </div>
                        <Button className="w-full mt-4" disabled={!complete} onClick={onNext}>
                            다음 단계: 기술 검증 <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

const TechnicalValidationStep = ({ onNext }: { onNext: () => void }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>편향성 분석 (Bias Heatmap)</CardTitle>
                        <CardDescription>학습 데이터 내의 인구통계학적 편향성을 시각화합니다.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <BiasHeatmap data={[
                                { group: "성별 (남/여)", biasScore: 0.12 },
                                { group: "연령 (청년/노년)", biasScore: 0.25 },
                                { group: "지역 (수도권/지방)", biasScore: 0.05 },
                                { group: "소득 (고/저)", biasScore: 0.18 }
                            ]} />
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">설명 가능성 (XAI)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                { label: "주요 변수 1", val: 85 },
                                { label: "주요 변수 2", val: 62 },
                                { label: "주요 변수 3", val: 45 }
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span>{item.label}</span>
                                        <span className="font-bold">{item.val}%</span>
                                    </div>
                                    <Progress value={item.val} className="h-1.5" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="bg-destructive/5 border-destructive/20">
                        <CardHeader>
                            <CardTitle className="text-base text-destructive flex items-center gap-2">
                                <Target className="w-4 h-4" /> 보안 취약점 발견
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground mb-3">
                                Red Teaming 테스트 결과, 3건의 프롬프트 인젝션 취약점이 발견되었습니다.
                            </p>
                            <Button variant="destructive" size="sm" className="w-full">
                                보안 패치 적용
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex justify-end">
                <Button onClick={onNext} size="lg">
                    다음 단계: 실시간 모니터링 <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
};

const MonitoringStep = ({ onNext }: { onNext: () => void }) => {
    const [drift, setDrift] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => {
            setDrift(prev => Math.min(prev + Math.random() * 2, 45));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard title="실시간 정확도" value="94.2" unit="%" trend="STABLE" icon={Target} />
                <MetricCard title="데이터 드리프트" value={drift.toFixed(1)} unit="%" trend="UP" color="destructive" icon={Activity} />
                <MetricCard title="응답 속도" value="124" unit="ms" trend="DOWN" icon={Zap} />
                <MetricCard title="일일 요청 수" value="24.5k" unit="건" trend="UP" icon={Users} />
            </div>

            <Card className="border-destructive/50 shadow-lg animate-pulse">
                <CardHeader className="bg-destructive/10">
                    <CardTitle className="text-destructive flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        경고: 드리프트 임계치 초과
                    </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <p className="text-sm text-foreground mb-4">
                        현재 데이터 분포가 학습 데이터와 <strong>15% 이상</strong> 차이가 발생하고 있습니다.
                        모델 성능 저하 위험이 있어 '긴급 대응 모드'로 전환합니다.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="destructive" onClick={() => {
                            toast.success("자동 재학습 파이프라인이 실행되었습니다.");
                            onNext();
                        }}>
                            자동 조치 실행 (재학습)
                        </Button>
                        <Button variant="outline">수동 검토</Button>
                    </div>
                </CardContent>
            </Card>

            <div className="h-[200px] bg-background border rounded-xl p-4 opacity-50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">실시간 트래픽 차트 시뮬레이션 중...</p>
                </div>
            </div>
        </div>
    );
};

const DashboardStep = ({ onReset }: { onReset: () => void }) => {
    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-primary">데모 완료!</h2>
                <p className="text-muted-foreground">
                    AI 거버넌스 오케스트레이터를 통해 복잡한 AI 규제 대응과 위험 관리가 이렇게 간단해집니다.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                        <CardTitle className="text-green-700">종합 안전성 점수</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-6xl font-bold text-green-600 mb-2">94</div>
                        <div className="text-sm text-green-600/80">매우 안전함 (A+)</div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>규제 준수 현황</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center bg-muted/50 p-2 rounded">
                            <span className="text-sm">AI 기본법</span>
                            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">준수 (Compliant)</Badge>
                        </div>
                        <div className="flex justify-between items-center bg-muted/50 p-2 rounded">
                            <span className="text-sm">개인정보보호법</span>
                            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">준수 (Compliant)</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>다음 단계</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button className="w-full" onClick={() => window.location.href = 'mailto:contact@gngai.com'}>
                            전문가 컨설팅 요청
                        </Button>
                        <Button variant="outline" className="w-full" onClick={onReset}>
                            <RotateCcw className="w-4 h-4 mr-2" />
                            다른 시나리오 체험
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

// --- Main Page Component ---

export default function InteractiveDemo() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedScenario, setSelectedScenario] = useState<DemoScenarioType | null>(null);

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const resetDemo = () => {
        setCurrentStep(1);
        setSelectedScenario(null);
    };

    const currentStepInfo = DEMO_STEPS.find(s => s.id === currentStep);

    return (
        <Layout>
            <div className="w-full max-w-6xl mx-auto py-12 px-4">
                {/* Header & Stepper */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        Interactive Demo
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        실제 업무 시나리오를 기반으로 AI 거버넌스 프로세스를 직접 체험해보세요.
                    </p>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10" />
                        <div className="flex justify-between">
                            {DEMO_STEPS.map((step) => {
                                const isActive = step.id === currentStep;
                                const isCompleted = step.id < currentStep;
                                return (
                                    <div key={step.id} className="flex flex-col items-center gap-2 bg-background px-2">
                                        <div
                                            className={cn(
                                                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
                                                isActive ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30" :
                                                    isCompleted ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                                            )}
                                        >
                                            {isCompleted ? <Check className="w-6 h-6" /> : step.id}
                                        </div>
                                        <span className={cn(
                                            "text-xs font-medium",
                                            isActive ? "text-primary" : "text-muted-foreground"
                                        )}>
                                            {step.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Dynamic Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-card border rounded-3xl p-8 shadow-sm">
                            <div className="mb-8 pb-6 border-b">
                                <h2 className="text-2xl font-bold mb-2">{currentStepInfo?.title}</h2>
                                <p className="text-muted-foreground">{currentStepInfo?.description}</p>
                            </div>

                            {currentStep === 1 && (
                                <ScenarioSelection onSelect={(id) => {
                                    setSelectedScenario(id);
                                    nextStep();
                                }} />
                            )}

                            {currentStep === 2 && selectedScenario && (
                                <RiskAssessmentStep
                                    scenarioId={selectedScenario}
                                    onNext={nextStep}
                                />
                            )}

                            {currentStep === 3 && (
                                <TechnicalValidationStep onNext={nextStep} />
                            )}

                            {currentStep === 4 && (
                                <MonitoringStep onNext={nextStep} />
                            )}

                            {currentStep === 5 && (
                                <DashboardStep onReset={resetDemo} />
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Layout>
    );
}
