// 직사각형 별 찍기\
// https://school.programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   console.log(a);
//   console.log(b);

//   const arr = [5][3]
//   return arr.fill('*')

// });

function test(a, b) {
  let x = new Array(a);
  for (let i = 0; i < a; i++) {
    x[i] = new Array(b);
    x[i].fill("*");
    console.log(x[i].join(""));
  }
}

test(5, 3);
