// 최대값과 최솟값

function solution(s) {
  const arr = s
    .split(" ")
    .map((num) => {
      return Number(num);
    })
    .sort((a, b) => a - b);

  const answer = `${arr[0]} ${arr[arr.length - 1]}`;
  return answer;
}

const s = "-1 -3 -2 -4";

solution(s);

/**
 * 이런 풀이도 됨
 */

function solution2(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}
