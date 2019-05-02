
let obj = {
  1 : [{value: 1},{value: 11}, {value: 111}, {value: 1111}],
  2 : {value: 2},
  3 : {value: 3},
  4 : {value: 4},
  5 : {value: 5},
  6 : {value: 6},
}
for(let x of Object.values(obj[1])) {
  console.log(x)
}
