let tabuada = +prompt(`Digite um numero para ser referencia da tabuada`);
const aNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i in aNum) {
  console.log(aNum[i] * tabuada);
}
