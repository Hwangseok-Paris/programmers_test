// 달리기 경주
// callings를 종합해서 처리하기엔 뒤에서만 순위가 바뀌면 안됨.
// callings기준으로 한 번 불릴 때 마다 순위를 조정하고 그 상태로 다음 순의 조정을 해야 함.

// function sltn(players, callings) {
//   callings.forEach((player, i) => {
//     const currRank = players.indexOf(player);
//     players[currRank] = players[currRank - 1];
//     players[currRank - 1] = player;
//   });
//   console.log(players);
//   return players;
// }

// indexOf로 불린 선수를 찾을때 시간이 오래결려서 Timeout이 발생 >>> map 형태로 변경하여 풀이 인덱스 값을 객체 Key로 찾고 순서 변경

function sltn(players, callings) {
  let playerObj = {};
  players.forEach((element, idx) => {
    playerObj[element] = idx;
  });

  console.log(playerObj);

  callings.forEach((player) => {
    const rankIdx = playerObj[player];
    playerObj[player]--;

    players[rankIdx] = players[rankIdx - 1];
    playerObj[players[rankIdx - 1]]++;

    players[rankIdx - 1] = player;
  });

  console.log(players);
  return players;
  // revPlayers.reverse().forEach((element) => {});
}

players = ["mumu", "soe", "poe", "kai", "mine"];
callings = ["kai", "kai", "mine", "mine"];

sltn(players, callings);
