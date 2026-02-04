# GnG Meta 웹사이트 리브랜딩 기획안

## 1. 브랜드 정체성 (Brand Identity)
*   **Core Value**: "Data Intelligence & Governance Orchestrator"
*   **Slogan**: "데이터의 가치를 증명하고, AI의 신뢰를 설계합니다."
*   **Tone & Manner**:
    *   **Professional**: 신뢰감을 주는 깊은 네이비(Deep Navy)와 깨끗한 화이트(Pure White)의 조화.
    *   **Scientific**: 데이터의 정교함을 표현하는 얇은 라인, 그리드 패턴, 테크니컬 드로잉 스타일.
    *   **human-centered**: 기술 너머의 '사람'과 '사회'를 보호한다는 따뜻한 책임감.

## 2. 사이트 구조 (Sitemap)

### 메인 페이지 (Home)
*   **Hero Section**:
    *   메시지: "Unleash the Potential of Safe AI" (안전한 AI의 잠재력을 해방하라)
    *   비주얼: 데이터 스트림이 정돈되어 건축물처럼 쌓이는 3D 추상화.
    *   Action: "솔루션 체험하기" (AI Sentinel 데모로 연결) / "기업 도입 문의"
*   **Who We Are**: 데이터 파이프라인부터 거버넌스까지, End-to-End 데이터 전문 기업.
*   **Our Solutions**:
    1.  **AI Sentinel**: (현재 개발된 제품) AI 거버넌스 및 위험 관리 플랫폼.
    2.  **Data Fabric**: 기업 데이터 통합 및 품질 관리 솔루션.
    3.  **On-Premise LLM**: 폐쇄망 환경을 위한 보안 특화 sLLM 구축.
*   **Use Cases**: 금융(신용평가), 제조(공정 최적화), 공공(민원 자동화) 성공 사례.
*   **Insights**: AI 규제 동향, 데이터 엔지니어링 블로그.

## 3. 디자인 컨셉 (Design Key Visual)
*   **Layered Glass**: 투명감 있는 레이어를 사용하여 복잡한 데이터를 명료하게 보여준다는 '투명성(Transparency)'을 시각화.
*   **Interactive Grid**: 마우스 움직임에 반응하는 미세한 배경 그리드로 '연결(Connectivity)'을 표현.
*   **Typography**: 가독성이 높은 Sans-serif 폰트(Pretendard/Inter)를 사용하여 정보 전달력 극대화.

## 4. 구현 계획
1.  **메인 랜딩 페이지(`src/pages/CompanyHome.tsx`) 신규 개발**
    *   기존 `Home.tsx`(AI Sentinel 제품 소개)는 `/solution/ai-sentinel`로 이동.
    *   새로운 메인 페이지는 회사의 전체 포트폴리오를 보여주는 관문 역할.
2.  **네비게이션 개편**
    *   GNB(Global Navigation Bar)에 Products 메뉴 추가.
    *   Company, Blog, Contact 메뉴 신설.
3.  **통합 아이덴티티 적용**
    *   새로운 로고 및 파비콘 적용.
    *   전사적 디자인 토큰(Color, Typography) 재정립.
