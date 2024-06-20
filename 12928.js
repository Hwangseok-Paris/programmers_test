// 약수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  console.log(answer);
  return answer;
}

const n = 5;
solution(n);
