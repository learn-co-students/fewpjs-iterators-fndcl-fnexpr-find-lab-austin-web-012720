const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

superbowlWin = (array) => {
  let result = array.find( object => object.result === 'W')
  if (result) {
    return result.year  
  } else {
    return undefined
  }
}


