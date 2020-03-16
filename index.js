/* eslint-disable no-console */
function superbowlWin(record) {
  const result = record.find((superbowl) => superbowl.result === 'W');
  if (result === undefined) return undefined;
  return (result.year);
}
