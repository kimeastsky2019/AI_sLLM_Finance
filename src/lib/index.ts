export const ROUTE_PATHS = {
  HOME: "/", // Corporate Home
  INFO: "/company/info", // New Info Page
  PRODUCT_AI_SENTINEL: "/solution/ai-sentinel", // Previous Home
  DASHBOARD: "/dashboard",
  ASSESSMENT: "/assessment",
  TECHNICAL_VALIDATION: "/technical-validation",
  MONITORING: "/monitoring",
  COMPLIANCE: "/compliance",
  SERVICE_DETAIL: "/service/:id",
  DEMO: "/demo",
} as const;

export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type ServiceStatus = "PLANNING" | "DEVELOPING" | "OPERATING" | "EMERGENCY_STOP";

export const RISK_LEVELS = {
  LOW: {
    label: "정상",
    color: "oklch(0.72 0.15 150)",
    bg: "oklch(0.72 0.15 150 / 0.1)",
    status: "success",
  },
  MEDIUM: {
    label: "주의",
    color: "oklch(0.82 0.14 75)",
    bg: "oklch(0.82 0.14 75 / 0.1)",
    status: "warning",
  },
  HIGH: {
    label: "위험",
    color: "oklch(0.68 0.18 35)",
    bg: "oklch(0.68 0.18 35 / 0.1)",
    status: "destructive",
  },
  CRITICAL: {
    label: "심각",
    color: "oklch(0.55 0.18 25)",
    bg: "oklch(0.55 0.18 25 / 0.1)",
    status: "destructive",
  },
} as const;

export const AI_CATEGORIES = [
  { id: "finance_loan", label: "금융 (대출 심사)", isHighImpact: true },
  { id: "hr_recruitment", label: "인사 (채용/평가)", isHighImpact: true },
  { id: "medical_diag", label: "의료 (진단 보조)", isHighImpact: true },
  { id: "customer_service", label: "고객 서비스 (챗봇)", isHighImpact: false },
  { id: "marketing_ads", label: "마케팅 (광고 추천)", isHighImpact: false },
  { id: "logistics_opt", label: "물류 (경로 최적화)", isHighImpact: false },
] as const;

export interface AIService {
  id: string;
  name: string;
  category: string;
  description: string;
  riskLevel: RiskLevel;
  status: ServiceStatus;
  complianceRate: number;
  lastUpdated: string;
  owner: string;
}

export interface RiskAssessment {
  id: string;
  serviceId: string;
  isHighImpact: boolean;
  assessmentDate: string;
  complianceScore: number;
  automaticNotice: string;
  checklist: {
    id: string;
    requirement: string;
    isMet: boolean;
    lawReference: string;
  }[];
}

export interface TechnicalValidation {
  id: string;
  serviceId: string;
  validationDate: string;
  biasMetrics: {
    group: string;
    biasScore: number;
  }[];
  xaiHeatmap: {
    feature: string;
    impact: number;
  }[];
  redTeamingLog: {
    scenario: string;
    status: "PASSED" | "FAILED";
    details: string;
  }[];
  securityScore: number;
  explainabilityScore: number;
}

export function getRiskLevelInfo(level: RiskLevel) {
  return RISK_LEVELS[level];
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(" ");
}
