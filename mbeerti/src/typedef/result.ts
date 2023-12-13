export interface MBTIResultInfo {
  imageSrc: string;
  altDescription: string;
}

export interface MBTIImageMap {
  [key: string]: MBTIResultInfo;
}

export const mbtiImages: MBTIImageMap = {
  enfj: {
    imageSrc: "mbeerti_result_enfj.jpg",
    altDescription: "필스너 - 누구나 시원하게 마실 수 있는",
  },
  entp: {
    imageSrc: "mbeerti_result_entp.jpg",
    altDescription: "포터 - 쓸 것 같지만 달콤함이 매력적인",
  },
  // Add other MBTI types with image source and alt descriptions here:
  intp: {
    imageSrc: "mbeerti_result_intp.jpg",
    altDescription: "스타우트 - 탄 맥아를 사용해 씁쓸한 맛이 일품인",
  },
  esfj: {
    imageSrc: "mbeerti_result_esfj.jpg",
    altDescription: "바이젠 - 부드러우며 바나나 향이 향긋한",
  },
  istj: {
    imageSrc: "mbeerti_result_istj.jpg",
    altDescription: "둔켈 - 어두운 색상과 달리 부드럽고 상쾌한",
  },
  isfj: {
    imageSrc: "mbeerti_result_isfj.jpg",
    altDescription: "블론드 에일 - 과일향, 꽃향과 청량감이 강한",
  },
  isfp: {
    imageSrc: "mbeerti_result_isfp.jpg",
    altDescription: "페일 에일 - 도수가 낮고 쌉쌀한 맛이 일품인",
  },
  istp: {
    imageSrc: "mbeerti_result_istp.jpg",
    altDescription: "페일 라거 - 쌉쌀한 맛이 거의 없고 가벼운",
  },
  estj: {
    imageSrc: "mbeerti_result_estj.jpg",
    altDescription: "복 - 강한 맛과 높은 도수의 흑맥주",
  },
  esfp: {
    imageSrc: "mbeerti_result_esfp.jpg",
    altDescription: "애플 사이다 - 사과 음료에 알콜 몇 방울",
  },
  estp: {
    imageSrc: "mbeerti_result_estp.jpg",
    altDescription: "쾰쉬 - 맑은 색과 깔끔한 맛의",
  },
  intj: {
    imageSrc: "mbeerti_result_intj.jpg",
    altDescription: "알트 비어 - 짙은 색의 구수하고 묵직한",
  },
  infj: {
    imageSrc: "mbeerti_result_infj.jpg",
    altDescription: "아이피에이 - 도수가 높고, 고소하며 쌉쌀한",
  },
  infp: {
    imageSrc: "mbeerti_result_infp.jpg",
    altDescription: "라들러 - 도수가 낮고, 과일맛이 달달한",
  },
  entj: {
    imageSrc: "mbeerti_result_entj.jpg",
    altDescription: "스트롱 에일 - 도수가 높고 탄산감이 강하며 깔끔한",
  },
};
