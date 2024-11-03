---
---

# Jekyll 프로젝트 설정 및 문제 해결 가이드

## Jekyll과 Minima 테마

- Minima는 Jekyll의 기본 테마이지만, 반드시 사용할 필요는 없음
- Minima를 사용하지 않을 경우:
  - 기본 레이아웃과 스타일을 직접 만들어야 함
  - `_layouts` 폴더에 `default.html`, `page.html`, `post.html` 등의 기본 레이아웃 파일 생성 필요

## Bundle 명령어 차이

- `bundle install`:
  - Gemfile.lock에 명시된 정확한 버전의 gem 설치
  - 주로 프로젝트 설정이나 다른 개발자의 변경사항 적용 시 사용
- `bundle update`:
  - Gemfile에 명시된 모든 gem의 최신 버전 설치
  - Gemfile.lock 파일 업데이트
  - gem 의도적 업그레이드 시 사용

## Jekyll 서버 실행 관련 문제 해결

1. win32-process gem 로딩 문제:
   - Gemfile에 다음 추가: `gem 'win32-process', platforms: [:mswin, :mingw, :x64_mingw]`
   - `bundle install` 실행

2. footer.html 파일 찾지 못하는 오류:
   - `_includes` 폴더에 `footer.html` 파일 생성 ㅇㅇ
   - `_layouts/default.html` 파일 수정:
     ```html
     ```

## Ruby 스크립트를 사용한 Jekyll 서버 제어

Ctrl+C 문제 우회를 위한 `serve.rb` 스크립트:

