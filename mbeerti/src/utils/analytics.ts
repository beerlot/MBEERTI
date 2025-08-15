declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = 'G-DN7SE8SSSJ';

// 페이지뷰 추적
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// 이벤트 추적
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// MBEERTI 특화 이벤트들
export const trackSurveyStart = () => {
  event({
    action: 'survey_start',
    category: 'engagement',
    label: '맥주 테스트 시작',
  });
};

export const trackSurveyComplete = (mbtiType: string) => {
  event({
    action: 'survey_complete',
    category: 'engagement',
    label: `MBTI 결과: ${mbtiType}`,
  });
};

export const trackShareClick = (platform?: string) => {
  event({
    action: 'share_click',
    category: 'engagement',
    label: platform || '공유하기',
  });
};

export const trackBeerlotClick = () => {
  event({
    action: 'beerlot_click',
    category: 'engagement',
    label: '비어랏으로 이동',
  });
};

export const trackResetClick = () => {
  event({
    action: 'reset_click',
    category: 'engagement',
    label: '테스트 다시하기',
  });
}; 