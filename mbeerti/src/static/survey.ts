import { SurveyListType } from "@/typedef/survey";

export const SurveyList: SurveyListType[] = [
  {
    question:
      "하루 끝, 맥주를 마실까 생각하며 너튜브 쇼츠를 보는데 맥주영상이 나온다.",
    option1: {
      text: "역시 오늘 맥주 각,, 저 맥주 한 번 마셔볼까?",
      type: "S",
    },
    option2: {
      text: `나 맥주 생각한 거 어떻게 알았지?\n알고리즘 뭐야 진짜?`,
      type: "N",
    },
  },
  {
    question: "맥주를 사러 편의점에 갈 때 챙기는 건?",
    option1: {
      text: "카드만 주머니에 넣고 나간다.",
      type: "P",
    },
    option2: {
      text: "민증, 카드 확인 후 지갑을 가방에 챙긴다.",
      type: "J",
    },
  },
  {
    question: "편의점에 도착한 내가 고르는 맥주는?",
    option1: {
      text: "이름이랑 패키지가 왠지 끌리는 맥주",
      type: "P",
    },
    option2: {
      text: "원래 사려고 생각해둔 그 맥주",
      type: "J",
    },
  },
  {
    question: "맥주를 계산하려는데, 알바생이 바뀌었다",
    option1: {
      text: "내적 친밀감 있었는데 바뀌어서 괜히 아쉽다",
      type: "I",
    },
    option2: {
      text: "“새로 오셨나봐요! 저 단골인데 ㅎㅎ”\n라며 말 건다.",
      type: "E",
    },
  },
  {
    question:
      "편의점 앞 간이 테이블에서 혼맥하던 사람과 눈이 마주치는데 너무 취향이다.",
    option1: {
      text: "저렇게 내 스타일인 사람이 동네에 있었나,,",
      type: "S",
    },
    option2: {
      text: `왜 쳐다보지? 말 걸려나?\n그럼 뭐라고 대답하지 ㅎㅎ`,
      type: "N",
    },
  },
  {
    question: "그 사람이 '저기요'하더니 눈물을 흘린다. 이 때 내가 할 말은?",
    option1: {
      text: "“어유 괜찮으세요? 울지 마세요ㅠㅠ”",
      type: "F",
    },
    option2: {
      text: "“네,,? 왜 우세요,, 무슨 일 있어요?”",
      type: "T",
    },
  },
  {
    question: "얼떨결에 얘기를 나누면서 같이 맥주를 마시게 됐다.",
    option1: {
      text: "혼맥하고 싶었는데,, 내 취향이니까 봐준다",
      type: "I",
    },
    option2: {
      text: "동네 친구도 사귀고 사심도 채우고 ㅋㅎ\n개이득!",
      type: "E",
    },
  },
  {
    question: "혹시나 했는데 역시나 애인이랑 헤어졌단다.",
    option1: {
      text: "얼마나 사귀었을까? 우는 걸 보니 차인걸까?",
      type: "T",
    },
    option2: {
      text: "진짜 많이 좋아했나보다,, 내가 다 속상하네",
      type: "F",
    },
  },
  {
    question: "갑자기 맥주가 사람이 되면 어떡할거냐고 묻는 이 사람, 내 대답은?",
    option1: {
      text: "“근데,, 맥주가 어떻게 사람이 되나요,,?”",
      type: "S",
    },
    option2: {
      text: "“흠,, 일단 전 맥주에 진심이니까\n제 마음을 고백할래요”",
      type: "N",
    },
  },
  {
    question: "나를 설레게 한 이 사람의 행동은?",
    option1: {
      text: "맥주를 흘린 내게 챙겨온 휴지를 건네준다",
      type: "J",
    },
    option2: {
      text: "맛있는 맥주집 안다며 2차 가자고 한다",
      type: "P",
    },
  },
  {
    question: "다음에 또 만나고 싶은데, 내 마음을 전하는 방법은?",
    option1: {
      text: "뭘 하지는 못하고, 하염없이 눈빛을 보낸다",
      type: "I",
    },
    option2: {
      text: "다음에 또 보고싶다고 하며 번호를 교환한다",
      type: "E",
    },
  },
  {
    question: "다시 편의점으로 돌아온 내가 맥주를 한 캔 더 산 이유는?",
    option1: {
      text: "아직 한 캔 더 마실 수 있을 것 같으니까",
      type: "T",
    },
    option2: {
      text: "이상형도 만났겠다 기분 좋으니까",
      type: "F",
    },
  },
];

export const SURVEY_LIST_LENGTH = SurveyList.length;
