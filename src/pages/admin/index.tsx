const dummy = [
  {
    id: 1,
    name: '명지서법',
    tag: '서예',
    category: '학술',
  },
  {
    id: 2,
    name: 'TIME',
    tag: '영어',
    category: '학술',
  },
  {
    id: 3,
    name: 'MIRS',
    tag: '기업분석',
    category: '학술',
  },
  {
    id: 4,
    name: '통해',
    tag: '통기타',
    category: '언행예술',
  },
  {
    id: 5,
    name: '흑풍',
    tag: '흑인음악',
    category: '언행예술',
  },
  {
    id: 6,
    name: '주리랑',
    tag: '창작음악',
    category: '언행예술',
  },
  {
    id: 7,
    name: '화이트홀스',
    tag: '밴드',
    category: '언행예술',
  },
  {
    id: 8,
    name: 'MGH',
    tag: '댄스',
    category: '언행예술',
  },
  {
    id: 9,
    name: '극예술연구회 알',
    tag: '연극',
    category: '언행예술',
  },
  {
    id: 10,
    name: '너나들이',
    tag: '건축봉사',
    category: '봉사',
  },
  {
    id: 11,
    name: 'RCY',
    tag: '적십자',
    category: '봉사',
  },
  {
    id: 12,
    name: 'PTPI',
    tag: '연합활동',
    category: '봉사',
  },
  {
    id: 13,
    name: '키비탄',
    tag: '아동봉사',
    category: '봉사',
  },
  {
    id: 14,
    name: '코아',
    tag: '광고',
    category: '전시창작',
  },
  {
    id: 15,
    name: '디비전',
    tag: '영상',
    category: '전시창작',
  },
  {
    id: 16,
    name: '포토랩',
    tag: '사진',
    category: '전시창작',
  },
  {
    id: 17,
    name: '그림패시만화',
    tag: '그림',
    category: '전시창작',
  },
  {
    id: 18,
    name: '씨네메이션',
    tag: '서브컬쳐',
    category: '전시창작',
  },
  {
    id: 19,
    name: 'C.C.C',
    tag: '기독교',
    category: '종교',
  },
  {
    id: 20,
    name: '실로암',
    tag: '기독교',
    category: '종교',
  },
  {
    id: 21,
    name: 'CFM',
    tag: '수화찬양',
    category: '종교',
  },
  {
    id: 22,
    name: 'UBF',
    tag: '성경',
    category: '종교',
  },
  {
    id: 23,
    name: '대건안드레아',
    tag: '가톨릭',
    category: '종교',
  },
  {
    id: 24,
    name: '콕콕콕',
    tag: '배드민턴',
    category: '체육',
  },
  {
    id: 25,
    name: 'MJTA',
    tag: '테니스',
    category: '체육',
  },
  {
    id: 26,
    name: '바다이야기',
    tag: '스킨스쿠버',
    category: '체육',
  },
  {
    id: 27,
    name: '무릉도원',
    tag: '검도',
    category: '체육',
  },
  {
    id: 28,
    name: '나이너스',
    tag: '야구',
    category: '체육',
  },
  {
    id: 29,
    name: '삼박자',
    tag: '족구',
    category: '체육',
  },
  {
    id: 30,
    name: '굴렁쇠',
    tag: '자전거',
    category: '체육',
  },
  {
    id: 31,
    name: '파인',
    tag: '농구',
    category: '체육',
  },
  {
    id: 32,
    name: 'FC명지',
    tag: '축구',
    category: '체육',
  },
  {
    id: 33,
    name: '오버행',
    tag: '클라이밍',
    category: '체육',
  },
  {
    id: 34,
    name: '명지챌린저스',
    tag: '챌린지',
    category: '사회연구',
  },
  {
    id: 35,
    name: 'SK루키',
    tag: '소셜벤처',
    category: '사회연구',
  },
  {
    id: 36,
    name: '인액터스',
    tag: '사회문제',
    category: '사회연구',
  },
  {
    id: 37,
    name: '흙',
    tag: '농활',
    category: '사회연구',
  },
  {
    id: 38,
    name: '비주얼',
    tag: '토론',
    category: '사회연구',
  },
];

export default function Index() {
  return (
    <div className="mt-26 mb-8 sm:mt-40">
      <div className="text-base font-bold text-gray-500 sm:text-lg">
        안녕하세요, 총동아리연합회 님!
      </div>
      <h1 className="text-3xl font-bold sm:text-4xl">동아리 관리</h1>
      <div className="flex items-end justify-end">
        <button
          type="button"
          className="mt-6 rounded-lg bg-indigo-200 bg-opacity-50 px-3 py-2 text-sm font-bold text-indigo-500 shadow-sm transition-opacity hover:opacity-50 sm:px-4 sm:py-2 sm:text-base"
        >
          동아리 추가하기
        </button>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:mt-4 md:mt-5 md:grid-cols-2 md:gap-5">
        {dummy.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded-lg bg-white py-4 px-4 shadow-sm sm:py-5 sm:px-6"
          >
            <div className="text-base font-semibold sm:text-lg">
              {item.name}
            </div>
            <div>
              <button
                type="button"
                className="mr-1 rounded-lg bg-gray-200 bg-opacity-50 px-3 py-1 text-sm font-semibold text-gray-600 shadow-sm transition-opacity hover:opacity-50 sm:py-2 sm:text-base"
              >
                수정
              </button>
              <button
                type="button"
                className="ml-1 rounded-lg bg-red-100 bg-opacity-50 px-3 py-1 text-sm font-semibold text-red-600 shadow-sm transition-opacity hover:opacity-50 sm:py-2 sm:text-base"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
