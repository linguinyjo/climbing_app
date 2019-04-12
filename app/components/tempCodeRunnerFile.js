obj = {
  a: ['2019-06-01', '2019-05-01', '2019-04-21'],
  b: [6, 5, 4],
  c: [7, 8, 9]
}


for(let array in obj) { 
  obj[array].sort((a, b) =>  new Date(a) - new Date(b))
}
console.log(obj)