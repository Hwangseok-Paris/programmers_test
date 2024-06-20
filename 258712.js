// 가장 많이 받은 선물
// https://school.programmers.co.kr/learn/courses/30/lessons/258712

// 1. 지수측정용 객체 1개 생성 > gifts의 0번째 항목에 이름이 있을 때마다 +, 1번째에 있을 경우에는 -
// 2. 상대 비교 필요.

function solution(friends, gifts) {
  var answer = 0;

  // 객체 선언
  let obj = {};

  friends.map((friend) => {
    obj[friend] = {};
    obj[friend].point = 0;
    friends.map((f) => {
      if (friend !== f) {
        obj[friend][f] = 0;
      }
    });
  });

  gifts.map((gnt) => {
    const give = gnt.split(" ")[0];
    const take = gnt.split(" ")[1];

    // 선물 준 사람 처리
    obj[give].point++; // 선물지수
    obj[give][take]++; // 상대지수

    // 선물 받은 사람 선물지수 처리
    obj[take].point--;
    obj[take][give]--;
  });

  // 객체 정리 끝

  // 다음달 선물 받을 사람 계산
  const nextMonth = friends.map((name) => {
    obj[name].gifts = 0;

    for (const key in obj[name]) {
      if (key !== "gifts" && key !== "point") {
        // 상대보다 선물 많이 줬을 때
        if (obj[name][key] > 0) obj[name].gifts++;

        // 상대와 주고받은 선물이 없거나 똑같이 주고 받았을 때
        if (obj[name][key] === 0) {
          if (obj[name].point > obj[key].point) obj[name].gifts++;
        }
      }
    }
    return obj[name].gifts;
  });

  // 다음달 선물받을 사람 계산한 배열에서 최대값 구하기
  answer = Math.max(...nextMonth);

  return answer;
}

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

solution(friends, gifts);
