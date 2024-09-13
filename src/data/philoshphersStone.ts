// src/data/questionsPhilosophersStone.ts
export interface Question {
  id: number;
  type: 'subjective' | 'multiple' | 'descriptive';
  question: string;
  answer: string;
  options?: string[];
}

export const questionsPhilosophersStone: Question[] = [
  { id: 1, type: 'subjective', question: '헤르미온느 이름의 풀 네임은?', answer: '헤르미온느 그레인저' },
  { id: 2, type: 'subjective', question: '해리포터 흉터의 모양은?', answer: '번개' },
  { id: 3, type: 'subjective', question: '극중 배경이 되는 학교의 이름은?', answer: '호그와트' },
  { id: 4, type: 'multiple', question: '해리포터가 학교에 입학하기 전 준비물로 구매하지 않은 것은?', answer: '빗자루', options: ['지팡이', '교과서', '교복'] },
  { id: 5, type: 'subjective', question: '호그와트를 가기위한 열차를 타는 승강장 이름은?', answer: '9와 4분의 3 승강장' },
  { id: 6, type: 'multiple', question: '해리가 처음 호그와트 급행열차를 타고 입학하러 갈 때, 개구리 초콜릿을 뜯어 누구의 카드를 얻습니까?', answer: '덤블도어', options: ['해그리드', '엄브릿지', '아구스 필치'] },
  { id: 7, type: 'multiple', question: '온갖 맛이 나는 강낭콩 젤리에 없는 맛은?', answer: '방귀맛', options: ['귀지맛', '구토맛', '코딱지맛'] },
  { id: 8, type: 'multiple', question: '호그와트 기숙사에 없는 유령은?', answer: '모우닝 머틀', options: ['목이 달랑달랑한 닉', '피투성이 남작', '뚱보 수도사'] },
  { id: 9, type: 'multiple', question: '해리포터가 학교에 입학하기 전 준비물로 구매하지 않은 것은?', answer: '빗자루', options: ['지팡이', '교과서', '교복'] },
  { id: 10, type: 'multiple', question: '해리포터의 반려동물의 종은?', answer: '부엉이', options: ['올빼미', '소쩍새', '까마귀'] },
  { id: 11, type: 'multiple', question: '이 중 물건을 띄우는 마법 주문은?', answer: '윙가르디움 레비오사', options: ['익스펙토 패트로눔', '알로호모라', '페트리피쿠스 토탈루스'] },
  { id: 12, type: 'multiple', question: '퀴디치의 수색꾼이 된 해리에게 맥고나걸 교수가 준 빗자루의 이름은?', answer: '님부스 2000', options: ['슈팅스타', '님부스 2001', '파이어볼트'] },
  { id: 13, type: 'multiple', question: '죽음을 먹는 자를 가장 많이 배출한 기숙사는?', answer: '슬리데린', options: ['그리핀도르', '후플푸프', '레번클로'] },
  { id: 14, type: 'multiple', question: '해리가 크리스마스 선물로 받지 않은 선물은?', answer: '스니치', options: ['나무 리코더', '50펜스 동전', '스웨터'] },
  { id: 15, type: 'multiple', question: '해리가 도서관에 갔다가 보게된 거울의 이름은?', answer: '소망의 거울', options: ['희망의 거울', '사랑의 거울', '절망의 거울'] },
  { id: 16, type: 'multiple', question: '해그리드가 키우는 새끼 용의 이름은?', answer: '노버트', options: ['노버튼', '로버트', '론버튼'] },
  { id: 17, type: 'multiple', question: '켄타우로스는 어떤 동물이 합쳐졌을까요?', answer: '말', options: ['소', '개', '기린'] },
  { id: 18, type: 'multiple', question: '마법사의 돌을 만든 사람의 이름은?', answer: '니콜라스 플라멜', options: ['질데로이 록허트', '리머스 루핀', '피터 패티그루'] },
  { id: 19, type: 'multiple', question: '퀴렐 교수의 몸에 있는 볼드모트의 얼굴의 위치는?', answer: '뒤통수', options: ['배', '등', '무릎'] },
  { id: 20, type: 'multiple', question: '종강 파티에서 해리와 친구들이 점수를 받기 전 우승 후보였던 기숙사는?', answer: '슬리데린', options: ['그리핀도르', '후플푸프', '레번클로'] },
];