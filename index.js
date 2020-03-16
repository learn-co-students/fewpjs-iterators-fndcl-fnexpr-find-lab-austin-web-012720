const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const result = arr.find((obj) => obj.result === 'W');
  if (result) {
    return result.year;
  }
}
