# 이민규 - Cloud Platform Engineer Portfolio

Kubernetes 기반 클라우드 플랫폼 엔지니어의 전문 포트폴리오입니다.

## 목차
- [미리보기](#미리보기)
- [기능](#기능)
- [PDF 버전 생성하기](#pdf-버전-생성하기)
- [GitHub Pages 배포하기](#github-pages-배포하기)
- [로컬에서 확인하기](#로컬에서-확인하기)
- [커스터마이징](#커스터마이징)

## 미리보기

이 포트폴리오는 다음과 같은 내용을 포함합니다:
- 17년 경력의 클라우드 플랫폼 엔지니어 경력 사항
- K-PaaS 표준모델 개발 및 멀티클라우드 아키텍처 설계 프로젝트
- CKA(Kubernetes Administrator) 자격증 등 전문 인증
- 특허 출원 및 논문 게재 실적

## 기능

### ✅ 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 화면에서 최적화
- 깔끔하고 전문적인 레이아웃

### ✅ PDF 출력 최적화
- 브라우저 인쇄 기능으로 고품질 PDF 생성
- A4 용지 크기 최적화
- 페이지 나눔 최적화로 내용 잘림 방지

### ✅ GitHub Pages 지원
- 무료 웹 호스팅
- HTTPS 자동 지원
- 빠른 배포 및 업데이트

## PDF 버전 생성하기

### 방법 1: 브라우저에서 직접 출력 (권장)

1. **파일 열기**
   ```bash
   open /Users/suslmk/workspace/profile/index.html
   ```

2. **인쇄 설정**
   - Chrome/Edge: `Cmd + P` 또는 메뉴에서 "인쇄"
   - Safari: `Cmd + P`

3. **PDF 설정 최적화**
   - **대상:** PDF로 저장
   - **레이아웃:** 세로
   - **용지 크기:** A4
   - **여백:** 기본값
   - **배경 그래픽:** ✅ 체크 (색상 출력을 위해 필수)
   - **축척:** 100%

4. **저장**
   - "PDF로 저장" 선택
   - 파일명: `이민규_포트폴리오.pdf`

### 방법 2: 명령줄에서 생성

#### Chrome/Chromium 사용
```bash
# Chrome이 설치된 경우
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --headless \
  --disable-gpu \
  --print-to-pdf=/Users/suslmk/workspace/profile/이민규_포트폴리오.pdf \
  --print-to-pdf-no-header \
  file:///Users/suslmk/workspace/profile/index.html
```

#### wkhtmltopdf 설치 및 사용 (고급)
```bash
# Homebrew로 설치
brew install wkhtmltopdf

# PDF 생성
cd /Users/suslmk/workspace/profile
wkhtmltopdf --enable-local-file-access index.html 이민규_포트폴리오.pdf
```

## GitHub Pages 배포하기

### 1단계: GitHub 저장소 생성

1. **GitHub에 로그인** 후 새 저장소 생성
   - 저장소 이름: `portfolio` (또는 원하는 이름)
   - Public 선택
   - README 추가하지 않음

### 2단계: 로컬 저장소 설정 및 푸시

```bash
# profile 디렉토리로 이동
cd /Users/suslmk/workspace/profile

# Git 초기화 (이미 완료됨)
# git init

# 기본 브랜치를 main으로 변경
git branch -M main

# 모든 파일 추가
git add .

# 첫 커밋 생성
git commit -m "Initial commit: Add portfolio website"

# GitHub 저장소 연결 (YOUR_USERNAME을 본인의 GitHub 아이디로 변경)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# GitHub에 푸시
git push -u origin main
```

### 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. **Save** 버튼 클릭

### 4단계: 배포 확인

약 1-2분 후 다음 주소로 접속:
```
https://YOUR_USERNAME.github.io/portfolio/
```

## 로컬에서 확인하기

### 방법 1: 파일 직접 열기
```bash
open /Users/suslmk/workspace/profile/index.html
```

### 방법 2: 간단한 웹 서버 실행 (권장)

Python 3가 설치되어 있는 경우:
```bash
cd /Users/suslmk/workspace/profile
python3 -m http.server 8000
```

브라우저에서 접속:
```
http://localhost:8000
```

## 커스터마이징

### 색상 변경

`styles.css` 파일의 `:root` 섹션에서 색상 변수를 수정하세요:

```css
:root {
    --primary-color: #2563eb;      /* 메인 색상 */
    --secondary-color: #1e40af;    /* 보조 색상 */
    --accent-color: #3b82f6;       /* 강조 색상 */
}
```

### 내용 수정

`index.html` 파일을 편집하여 내용을 업데이트하세요:
- 개인정보
- 경력 사항
- 프로젝트
- 기술 스택 등

### 변경사항 GitHub에 반영

```bash
cd /Users/suslmk/workspace/profile

# 변경된 파일 추가
git add .

# 커밋
git commit -m "Update portfolio content"

# GitHub에 푸시
git push origin main
```

몇 분 후 GitHub Pages에 자동으로 반영됩니다.

## 파일 구조

```
profile/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트 (웹 + PDF 최적화)
├── .gitignore         # Git 제외 파일 목록
└── README.md          # 이 문서
```

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**:
  - CSS Grid & Flexbox
  - CSS Variables (커스텀 속성)
  - Print Media Queries (PDF 최적화)
  - Responsive Design
- **Git & GitHub Pages**: 버전 관리 및 호스팅

## 브라우저 지원

- Chrome/Edge (최신 버전)
- Safari (최신 버전)
- Firefox (최신 버전)

## 문제 해결

### PDF에서 색상이 나오지 않을 때
- 인쇄 설정에서 "배경 그래픽" 옵션을 활성화하세요

### GitHub Pages가 업데이트되지 않을 때
- GitHub Actions 탭에서 배포 상태를 확인하세요
- 브라우저 캐시를 삭제하고 새로고침하세요 (Cmd + Shift + R)

### 로컬에서 파일이 제대로 보이지 않을 때
- 웹 서버를 사용해서 열기를 권장합니다
- 파일 경로가 올바른지 확인하세요

## 라이선스

이 포트폴리오는 개인용으로 제작되었습니다.

## 연락처

이민규
- 📱 010-3627-3982
- 📍 경기도 김포시

---

마지막 업데이트: 2026년 1월