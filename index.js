/*
Pesquisas:
Python: https://stackoverflow.com/questions/31481589/separating-list-of-years-into-decades
Map.Reduce: https://stackoverflow.com/questions/29364262/how-to-group-by-and-sum-an-array-of-objects
*/

var anos = [
  { ano: 1994, qte: 2 },
  { ano: 1995, qte: 1 },
  { ano: 1999, qte: 3 },//6
  { ano: 2000, qte: 5 },
  { ano: 2001, qte: 2 },
  { ano: 2002, qte: 2 },
  { ano: 2003, qte: 1 },//10
  { ano: 2019, qte: 5 },
  { ano: 2010, qte: 7 },
  { ano: 2011, qte: 1 },
  { ano: 2012, qte: 1 },
  { ano: 2019, qte: 2 },//16
  { ano: 2020, qte: 5 },
  { ano: 2021, qte: 6 },
  { ano: 2021, qte: 7 },
  { ano: 2021, qte: 3 }//21
];

var decadas = [];
var resultados = [];

//somente para saber os anos, nao precisa
/*
for (a=0; a < anos.length; a++) {
   decada = parseInt(Math.floor(anos[a].ano/10) * 10);
   decadas.push(decada);
}
*/
//console.log(decadas);
anos.reduce(function(res, value) {
  let itemAno = value.ano;
  let decada = parseInt(Math.floor(itemAno / 10) * 10);

  if (!res[value.decadas]) { //nao definido, cria
    res[value.decadas] = {}
  }
  if (!res[value.decadas][decada]) { //nao definido, cria
    res[value.decadas][decada] = { soma: 0 } //valor 0 inicial
  }
  res[value.decadas][decada].soma += (value.qte); //acumula

  resultados = res[value.decadas]; //registra a saida

  return res;
}, {});

console.log("resultados", resultados);//, "anos", anos)

/* output

resultados {
  '1990': { soma: 6 },
  '2000': { soma: 10 },
  '2010': { soma: 16 },
  '2020': { soma: 21 }
}

*/
