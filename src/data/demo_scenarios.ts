
import { RiskLevel } from "@/lib";

export type DemoScenarioType = "FINANCE" | "RECRUITMENT" | "CHATBOT";

export interface DemoScenario {
    id: DemoScenarioType;
    title: string;
    description: string;
    icon: string;
    riskLevel: RiskLevel;
    features: string[];
}

export const DEMO_SCENARIOS: DemoScenario[] = [
    {
        id: "FINANCE",
        title: "금융 대출 심사 AI",
        description: "은행의 개인 신용대출 자동 심사 시스템으로, 고위험 AI로 분류되며 엄격한 편향성 검증이 요구됩니다.",
        icon: "Banknote",
        riskLevel: "HIGH",
        features: ["편향성 분석 (성별/나이)", "설명 가능성 (XAI)", "규제 준수 (금융소비자보호법)"]
    },
    {
        id: "RECRUITMENT",
        title: "채용 평가 AI",
        description: "대기업의 서류 전형 자동 평가 시스템입니다. 공정성 확보와 채용 절차법 준수가 핵심입니다.",
        icon: "Users",
        riskLevel: "HIGH",
        features: ["공정성 검증", "개인정보 보호", "채용 절차법 준수"]
    },
    {
        id: "CHATBOT",
        title: "고객 서비스 챗봇",
        description: "온라인 쇼핑몰의 고객 문의 자동 응답 시스템입니다. 환각 현상(Hallucination) 방지와 유해 콘텐츠 필터링이 중요합니다.",
        icon: "MessageSquare",
        riskLevel: "LOW",
        features: ["환각 탐지", "PII 마스킹", "유해 콘텐츠 필터링"]
    }
];

export const DEMO_STEPS = [
    { id: 1, title: "시나리오 선택", description: "데모를 진행할 AI 서비스 시나리오를 선택합니다." },
    { id: 2, title: "AI 위험성 평가", description: "선택한 시나리오의 위험 수준을 평가하고 규제 준수 여부를 확인합니다." },
    { id: 3, title: "기술 검증", description: "데이터 편향성, 설명 가능성, 보안 취약점을 기술적으로 검증합니다." },
    { id: 4, title: "실시간 모니터링", description: "운영 중인 모델의 성능 저하와 이상 징후를 실시간으로 감시합니다." },
    { id: 5, title: "통합 대시보드", description: "전체 서비스의 위험 상태와 규제 대응 현황을 종합적으로 리포팅합니다." }
];
