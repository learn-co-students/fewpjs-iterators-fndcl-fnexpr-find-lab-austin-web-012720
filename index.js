// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

// function superbowlWin(arr) {
//   if ( arr.find(function(s){ return s.result === "W"  })){
//     win = arr.find(function(s){ return s.result === "W"  })
//     return win.year
//   }
//   else {
//     return "undefined"
//   }
// }

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}
