const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (i in maioresPaises) {
  for (x of maioresPaises) {
    console.log(`${Number(i) + 1} - ${maioresPaises[i]}`);
  }
}
