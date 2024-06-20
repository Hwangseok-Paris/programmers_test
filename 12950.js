function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  console.log(answer);

  return answer;
}

const a = [
  [1, 2],
  [2, 3],
];
const b = [
  [3, 4],
  [5, 6],
];

solution(a, b);
