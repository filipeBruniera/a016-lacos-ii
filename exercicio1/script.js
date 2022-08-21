const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

for (let i in array) {
  let resultTotal = 0;
  for (let d in array[i]) {
    console.log(`O jogador ${Number(i) + 1}: marcou ${array[i][d]} gols na temporada ${Number(d) + 1}`);
    resultTotal = resultTotal + array[i][d];
  }
  console.log(`Jogador ${Number(i) + 1}: marcou o total de ${resultTotal} gols em todas as temporadas`);
}
