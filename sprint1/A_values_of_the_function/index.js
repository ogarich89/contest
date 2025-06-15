const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

const readIntArray = () => {
  const arr = _inputLines[_curLine].trim().split(" ").map(Number);
  _curLine++;
  return arr;
}

const quadraticFunction = (a, x, b, c) => a * (x * x) + b * x + c;

const solve = () => {
  const [a, x, b, c] = readIntArray();
  const result = quadraticFunction(a, x, b, c);
  console.log(result);
}

process.stdin.on('end', solve);