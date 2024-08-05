# 뉴진스 하니 팬페이지
## 1. 소개

NewJeans의 멤버 Hanni Pham에 대한 팬페이지로, **Next.js 14**를 사용하여 개발된 웹 애플리케이션입니다. 이 프로젝트는 아티스트 뉴진스 하니의 최신 소식, 사진, 뉴스를 제공하고 팬 커뮤니티를 위한 플랫폼 역할을 합니다.

### 1.1 **프로젝트 기간**

- **개발 기간:** 2023.07.01 - 2023.07.28

### 1.2 기술 스택

다음과 같은 기술 스택을 활용하였습니다.

- **Frontend:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes
- **Email:** Nodemailer
- **Form Validation:** Yup

## 2. 주요 구현 사항

- 서버 사이드 렌더링 (SSR)과 정적 사이트 생성 (SSG)을 활용한 최적화된 페이지 로딩
- 동적 메타데이터 생성을 통한 **SEO 최적화**
- 재사용 가능한 컴포넌트 설계 (Hero, CarouselPosts, FeaturedPosts)
- 파일 시스템 기반의 블로그 포스트 관리
- 이메일 발송 기능 구현 및 보안 강화 (환경 변수 사용)
- 유효성 검사를 통한 안전한 Form 제출 처리

## 3. 프로젝트 구조

📁 page/: 각 라우트에 대한 페이지 컴포넌트 <br />
📁 components/: 재사용 가능한 UI 컴포넌트 <br />
📁 services/: 데이터 fetching 및 이메일 발송 비즈니스 로직 <br />
📁 public/: 정적 에셋 (이미지 등) <br />
