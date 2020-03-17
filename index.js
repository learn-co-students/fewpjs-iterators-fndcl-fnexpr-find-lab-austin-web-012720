const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  let result = record.find( object => object.result === 'W')
  if (result) {
    return result.year  
  } else {
    return undefined
  }
}

//Receives 1 argument, an Array of JavaScript Objects
//Each object has two properties: year and result
//Use find() to test each Object to see if the result is "W" — a win!
//superbowlWin() should return the year when the win occurred 
//(if it occurred at all!). If no win is found, it should return, sadly, undefined

// const record = [
//    {year: "2018", result: "L"},
//    {year: "2017", result: "W"},
//    {year: "2016", result: "N/A"}
// //   //...
// ]
