// https://school.programmers.co.kr/learn/courses/30/lessons/178870
// 연속된 부분수열의 합
// 투 포인터 알고리즘 활용

function solution(sequence, k) {
  let n = sequence.length; //데이터 개수 N
  //   let m = 5; //찾고자 하는 부분합 M
  // let data = [1, 3, 3]; //전체 수열
  let res = [0, n - 1];
  // let count = 0;
  let sum = 0;
  let end = 0;

  for (let start = 0; start < n; start++) {
    //start를 차례대로 증가시키며 반복
    while (sum < k && end < n) {
      //end를 가능한 만큼 이동
      sum += sequence[end];
      end++;
    }
    if (sum == k) {
      // count++; //부분합이 m이면 count 증가
      if (res[1] - res[0] > end - 1 - start) res = [start, end - 1];
    }
    sum -= sequence[start]; //while문을 탈출한 경우 ➡️ start 증가
  }
  return res;
}

const sequence = [1, 3, 1, 2, 3];
const k = 3;

const resj = solution(sequence, k);

console.log(resj);
