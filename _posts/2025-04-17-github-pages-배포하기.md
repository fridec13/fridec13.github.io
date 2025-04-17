---
layout: post
title: "GitHub Pages로 Jekyll 블로그 배포하기"
date: 2023-04-17 15:00:00 +0900
categories: jekyll
tags: [jekyll, github-pages, deployment]
---

## GitHub Pages로 Jekyll 블로그 배포하기

Jekyll 블로그를 만들었다면, 이제 GitHub Pages를 통해 무료로 배포해 보겠습니다.

### GitHub 저장소 생성하기

1. GitHub에 로그인하고 새 저장소를 생성합니다.
2. 저장소 이름은 `사용자이름.github.io` 형식으로 지정합니다. (예: `username.github.io`)

### 로컬 블로그를 GitHub에 연결하기

터미널에서 다음 명령어를 실행하여 로컬 블로그를 GitHub 저장소에 연결합니다:

```bash
git init
git remote add origin https://github.com/사용자이름/사용자이름.github.io.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### GitHub Pages 활성화하기

1. GitHub 저장소 페이지로 이동합니다.
2. "Settings" 탭을 클릭합니다.
3. 좌측 메뉴에서 "Pages"를 클릭합니다.
4. "Source" 섹션에서 브랜치를 "main"으로 선택하고 저장합니다.

몇 분 후에 `https://사용자이름.github.io`에서 블로그를 확인할 수 있습니다.

### 커스텀 도메인 설정하기

자신의 도메인을 가지고 있다면, GitHub Pages에 연결할 수도 있습니다:

1. 도메인 제공업체의 DNS 설정에서 A 레코드를 추가합니다:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. GitHub Pages 설정의 "Custom domain" 필드에 도메인을 입력하고 저장합니다.

이제 자신의 도메인으로 Jekyll 블로그에 접속할 수 있습니다! 