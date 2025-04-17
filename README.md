# GitHub 블로그

이 저장소는 Jekyll 기반의 GitHub 블로그입니다.

## 기능

- 반응형 디자인
- 카테고리 및 태그 지원
- 관련 게시물 표시
- Giscus 댓글 시스템
- 코드 하이라이팅
- 3D 모델 뷰어

## Giscus 댓글 설정 방법

1. GitHub에서 Giscus 앱을 설치합니다: https://github.com/apps/giscus
2. 설치할 때 이 저장소를 선택합니다.
3. 저장소 설정에서 Discussions 기능을 활성화합니다.
4. [Giscus 설정 페이지](https://giscus.app/ko)에서 필요한 설정값을 가져옵니다.
5. `_config.yml` 파일의 giscus 설정을 업데이트합니다:

```yaml
giscus:
  repo: "username/username.github.io"      # 실제 GitHub 사용자명으로 변경
  repo_id: "R_kgDOXXXXXX"                  # Giscus 설정 페이지에서 가져옴
  category: "Comments"                      # Discussions 카테고리
  category_id: "DIC_kwDOXXXXXXXXXX"        # Giscus 설정 페이지에서 가져옴
  mapping: "pathname"                       # 페이지와 Discussion 연결 방법
  reactions_enabled: "1"                    # 이모지 반응 활성화
  theme: "light"                            # 테마 설정
  lang: "ko"                                # 언어 설정
```

## 3D 모델 뷰어 사용 방법

포스트에 3D 모델을 표시하려면:

1. `assets/models/` 디렉토리에 STL 파일을 업로드합니다.
2. 포스트의 front matter에 모델 경로를 추가합니다:

```yaml
---
title: 3D 모델 예시
layout: post
model: /assets/models/example.stl
---
```

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
