setting = {
  white: [
    {start: "26/07/2019"}, {start: "21/05/2019"}, {start: "23/06/2019"}, {start: "21/06/2019"}, {start: "05/05/2019"}, {start: "17/05/2019"}, {start: "22/05/2019"}
  ],
  black: [
    {start: "26/07/2019"}, {start: "21/05/2019"}, {start: "23/06/2019"}, {start: "21/06/2019"}, {start: "05/05/2019"}, {start: "17/05/2019"}, {start: "22/05/2019"}
  ]
}

for(let array in setting) {
  setting[array].sort((a, b) => {
    return new Date(a) -  new Date(b)
  })
}

console.log(setting)