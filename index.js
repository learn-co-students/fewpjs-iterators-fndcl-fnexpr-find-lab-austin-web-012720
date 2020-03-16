const testVar = {}

function superbowlWin(inputArray) {
  let win = inputArray.find( e =>
    e.result === 'W'



  )
  if (win == undefined){
    return undefined
  }
  else {
    return win.year
  }
}
