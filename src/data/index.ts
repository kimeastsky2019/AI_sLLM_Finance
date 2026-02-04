import { AIService, RiskAssessment, TechnicalValidation } from "../lib/index";

export const mockAIServices: AIService[] = [
  {
    id: "svc-001",
    name: "신용대출 심사 AI 솔루션",
    category: "finance_loan",
    description: "개인 및 소상공인 대상 신용대출 승인 여부 및 한도 산출 알고리즘",
    riskLevel: "HIGH",
    status: "OPERATING",
    complianceRate: 92,
    lastUpdated: "2026-01-25T14:30:00Z",
    owner: "리스크관리팀 김철수"
  },
  {
    id: "svc-002",
    name: "글로벌 인재 채용 스크리닝 v2",
    category: "hr_recruitment",
    description: "지원서 자동 분석 및 면접 대상자 우선순위 추천 엔진",
    riskLevel: "MEDIUM",
    status: "DEVELOPING",
    complianceRate: 78,
    lastUpdated: "2026-01-29T10:15:00Z",
    owner: "인사기획팀 이영희"
  },
  {
    id: "svc-003",
    name: "지능형 고객 민원 상담 챗봇",
    category: "customer_service",
    description: "LLM 기반의 실시간 고객 문의 자동 응대 및 감정 분석",
    riskLevel: "LOW",
    status: "OPERATING",
    complianceRate: 98,
    lastUpdated: "2026-01-30T09:00:00Z",
    owner: "CS운영팀 박지민"
  },
  {
    id: "svc-004",
    name: "심혈관 질환 조기 진단 보조 장치",
    category: "medical_diag",
    description: "의료 영상 및 생체 신호 기반의 고위험 질병 예측 모델",
    riskLevel: "CRITICAL",
    status: "PLANNING",
    complianceRate: 45,
    lastUpdated: "2026-01-28T16:45:00Z",
    owner: "R&D본부 최강민"
  },
  {
    id: "svc-005",
    name: "배송 경로 최적화 알고리즘",
    category: "logistics_opt",
    description: "실시간 교통 상황을 반영한 물류 차량 이동 경로 최적화",
    riskLevel: "LOW",
    status: "EMERGENCY_STOP",
    complianceRate: 85,
    lastUpdated: "2026-01-30T22:10:00Z",
    owner: "물류IT팀 정은지"
  }
];

export const mockRiskAssessments: RiskAssessment[] = [
  {
    id: "ra-001",
    serviceId: "svc-001",
    isHighImpact: true,
    assessmentDate: "2026-01-20T11:00:00Z",
    complianceScore: 92,
    automaticNotice: "본 서비스는 AI에 의해 대출 심사 결과가 결정됩니다. 결과에 이의가 있는 경우 담당자에게 재심사를 요청할 수 있습니다.",
    checklist: [
      { id: "chk-1", requirement: "알고리즘의 공정성 테스트 수행 여부", isMet: true, lawReference: "AI기본법 제12조" },
      { id: "chk-2", requirement: "개인정보 영향평가 실시", isMet: true, lawReference: "개인정보보호법 제33조" },
      { id: "chk-3", requirement: "이용자 고지 의무 준수", isMet: true, lawReference: "소비자보호법 제15조" },
      { id: "chk-4", requirement: "인적 개입권 보장 (Human-in-the-loop)", isMet: false, lawReference: "EU AI Act Art.14" }
    ]
  }
];

export const mockTechnicalValidations: TechnicalValidation[] = [
  {
    id: "tv-001",
    serviceId: "svc-001",
    validationDate: "2026-01-24T15:00:00Z",
    biasMetrics: [
      { group: "성별 (남성/여성)", biasScore: 0.02 },
      { group: "연령 (20대/60대)", biasScore: 0.15 },
      { group: "거주 지역 (수도권/비수도권)", biasScore: 0.05 },
      { group: "직업군 (정규직/비정규직)", biasScore: 0.21 }
    ],
    xaiHeatmap: [
      { feature: "연 소득 (Annual Income)", impact: 0.45 },
      { feature: "신용 점수 (Credit Score)", impact: 0.38 },
      { feature: "기존 대출 건수 (Existing Loans)", impact: 0.12 },
      { feature: "주거 형태 (Housing Type)", impact: 0.05 }
    ],
    redTeamingLog: [
      { scenario: "적대적 샘플 삽입 공격 (Adversarial Attack)", status: "PASSED", details: "노이즈 삽입을 통한 심사 결과 조작 시도 방어 성공" },
      { scenario: "모델 추출 공격 (Model Extraction)", status: "PASSED", details: "API 반복 쿼리를 통한 가중치 추론 차단 확인" },
      { scenario: "데이터 포이즈닝 (Data Poisoning)", status: "FAILED", details: "학습 데이터 오염 시 성능 저하 구간 발견, 재학습 필요" }
    ],
    securityScore: 88,
    explainabilityScore: 94
  }
];

export const complianceData = [
  {
    lawName: "AI 기본법 (대한민국)",
    complianceRate: 85,
    trend: "UP",
    mandatoryCount: 12,
    completedCount: 10
  },
  {
    lawName: "EU AI Act",
    complianceRate: 62,
    trend: "STABLE",
    mandatoryCount: 24,
    completedCount: 15
  },
  {
    lawName: "금융소비자 보호법",
    complianceRate: 95,
    trend: "UP",
    mandatoryCount: 8,
    completedCount: 8
  },
  {
    lawName: "개인정보 보호법",
    complianceRate: 100,
    trend: "STABLE",
    mandatoryCount: 15,
    completedCount: 15
  }
];
