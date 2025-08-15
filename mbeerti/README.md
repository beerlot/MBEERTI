# MBEERTI - Beer Personality Test

맥주 성격 테스트 앱입니다. MBTI 기반으로 사용자의 맥주 성격을 분석합니다.

## Google Analytics 설정

1. Google Analytics 계정에서 새로운 속성을 생성하거나 기존 속성을 사용
2. 측정 ID를 복사 (예: G-XXXXXXXXXX)
3. `src/app/layout.tsx` 파일에서 `G-XXXXXXXXXX`를 실제 측정 ID로 교체
4. `src/utils/analytics.ts` 파일에서도 `GA_TRACKING_ID`를 실제 측정 ID로 교체

## 트래킹되는 이벤트

- **survey_start**: 맥주 테스트 시작
- **survey_complete**: 테스트 완료 (MBTI 결과 포함)
- **share_click**: 공유하기 버튼 클릭
- **beerlot_click**: 비어랏으로 이동 버튼 클릭
- **reset_click**: 테스트 다시하기 버튼 클릭

## 개발

```bash
npm install
npm run dev
```

## 배포

```bash
npm run build
npm run start
```
