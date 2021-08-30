# A partir de datas e valores, obter a soma de valores separados por décadas
# From dates and values, get the sum of values separated by decades

```js
// input data

var years = [
  { year: 1994, qty: 2 },
  { year: 1995, qty: 1 },
  { year: 1999, qty: 3 },//6
  { year: 2000, qty: 5 },
  { year: 2001, qty: 2 },
  { year: 2002, qty: 2 },
  { year: 2003, qty: 1 },//10
  { year: 2019, qty: 5 },
  { year: 2010, qty: 7 },
  { year: 2011, qty: 1 },
  { year: 2012, qty: 1 },
  { year: 2019, qty: 2 },//16
  { year: 2020, qty: 5 },
  { year: 2021, qty: 6 },
  { year: 2021, qty: 7 },
  { year: 2021, qty: 3 }//21
];

// output data
results {
  '1990': { total: 6 },
  '2000': { total: 10 },
  '2010': { total: 16 },
  '2020': { total: 21 }
}
```

