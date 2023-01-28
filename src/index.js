module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  const opens = bracketsConfig.map(pairBracket => pairBracket[0]);
  const ends = bracketsConfig.map(pairBracket => pairBracket[1]);

  for (let i = 0; i < str.length; i += 1) {
    if (ends.includes(str[i]) && (ends.indexOf(str[i]) == opens.indexOf(brackets.at(-1)))) {
      brackets.pop();
    } else if (opens.includes(str[i])) {
      brackets.push(str[i]);
    } else return false
  }

  return (brackets.length == 0) ? true : false;
}