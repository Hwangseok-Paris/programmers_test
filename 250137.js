// 붕대감기
// https://school.programmers.co.kr/learn/courses/30/lessons/250137?language=javascript

function solution(bandage, health, attacks) {
  var answer = 0;
  const lastTurn = attacks[attacks.length - 1][0]; // 몬스터의 마지막 공격 턴
  const maxHp = health; // 최대 체력
  let curHp = health; // 체력 초기화
  let happyTime = 0; // 연속 체력 회복시간
  for (let j = 1; j <= lastTurn; j++) {
    console.log(j, "번째 턴");

    // 현재 턴과 공격 턴이 일치할 때
    if (j === attacks[0][0]) {
      curHp -= attacks[0][1];
      if (curHp <= 0) return -1;

      happyTime = 0;
      console.log("공격당함!!! 현재 체력 ::: ", curHp);
      attacks.shift();
    } else {
      happyTime++;
      if (curHp < maxHp) {
        curHp += bandage[1];
      }
      //
      if (happyTime === bandage[0]) {
        curHp += bandage[2];
        happyTime = 0;
      }
      if (curHp > maxHp) curHp = maxHp;
      console.log("힐!!! 현재 체력 ::: ", curHp);
    }
  }
  console.log(curHp);
  return curHp;
}

const bandage = [1, 1, 1];
const health = 5;
const attacks = [
  [1, 2],
  [3, 2],
];

solution(bandage, health, attacks);
