//액션생성
const NEXT_PAGE = "score/NEXT_PAGE";
const CHECK = "score/CHECK";
const RESET = "score/RESET";

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function check(IsCorrect) {
  return {
    type: CHECK,
    IsCorrect,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

//초기상태 설정
const InitState = {
  score: 0,
  page: 0,
  quizs: [
    {
      q: "대한민국의 수도는 어디입니까?",
      a: [
        {
          text: "서울",
          IsCorrect: true,
        },
        {
          text: "인천",
          IsCorrect: false,
        },
        {
          text: "광주",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "미국의 수도는 어디입니까?",
      a: [
        {
          text: "워싱턴D.C",
          IsCorrect: true,
        },
        {
          text: "뉴욕",
          IsCorrect: false,
        },
        {
          text: "샌프란시스코",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "일본의 수도는 어디입니까?",
      a: [
        {
          text: "오사카",
          IsCorrect: false,
        },
        {
          text: "도쿄",
          IsCorrect: true,
        },
        {
          text: "훗카이도",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "중국의 수도는 어디입니까?",
      a: [
        {
          text: "광저우",
          IsCorrect: false,
        },
        {
          text: "텐진",
          IsCorrect: false,
        },
        {
          text: "베이징",
          IsCorrect: true,
        },
      ],
    },
    {
      q: "태국의 수도는 어디입니까?",
      a: [
        {
          text: "방콕",
          IsCorrect: true,
        },
        {
          text: "빠이",
          IsCorrect: false,
        },
        {
          text: "치앙마이",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "몽골의 수도는 어디입니까?",
      a: [
        {
          text: "아르바이헤르",
          IsCorrect: false,
        },
        {
          text: "울란바토르",
          IsCorrect: true,
        },
        {
          text: "은드르항",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "이란의 수도는 어디입니까?",
      a: [
        {
          text: "반다르아바스",
          IsCorrect: false,
        },
        {
          text: "부셰르",
          IsCorrect: false,
        },
        {
          text: "테헤란",
          IsCorrect: true,
        },
      ],
    },
    {
      q: "시리아 수도는 어디입니까?",
      a: [
        {
          text: "다라",
          IsCorrect: false,
        },
        {
          text: "디마스쿠스",
          IsCorrect: true,
        },
        {
          text: "데이르에조르",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "프랑스의 수도는 어디입니까?",
      a: [
        {
          text: "파리",
          IsCorrect: true,
        },
        {
          text: "뚜 루",
          IsCorrect: false,
        },
        {
          text: "마르세이유",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "스페인의 수도는 어디입니까?",
      a: [
        {
          text: "바르셀로나",
          IsCorrect: false,
        },
        {
          text: "발렌시아",
          IsCorrect: false,
        },
        {
          text: "마드리드",
          IsCorrect: true,
        },
      ],
    },
    {
      q: "우크라이나의 수도는 어디입니까?",
      a: [
        {
          text: "키이우",
          IsCorrect: true,
        },
        {
          text: "하르키우",
          IsCorrect: false,
        },
        {
          text: "리비우",
          IsCorrect: false,
        },
      ],
    },
    {
      q: "덴마크의 수도는 어디입니까?",
      a: [
        {
          text: "알보그",
          IsCorrect: false,
        },
        {
          text: "코펜하겐",
          IsCorrect: true,
        },
        {
          text: "에스비에르",
          IsCorrect: false,
        },
      ],
    },
  ],
};

//리듀서
export default function score(state = InitState, action) {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case CHECK:
      return {
        ...state,
        score: action.IsCorrect ? state.score + 10 : state.score,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        score: 0,
      };
    default:
      return state;
  }
}
