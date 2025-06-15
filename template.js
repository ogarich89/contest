const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

const readInt = () => {
    const number = Number(_inputLines[_curLine]);
    _curLine++;
    return number;
}

const readString = () => {
    const string = _inputLines[_curLine].trim();
    _curLine++;
    return string;
}

const readStringArray = () => {
    const arr = _inputLines[_curLine].trim().split(" ");
    _curLine++;
    return arr;
}

const readIntArray = () => {
    const arr = _inputLines[_curLine].trim().split(" ").map(Number);
    _curLine++;
    return arr;
}

const solve = () => {

}

process.stdin.on('end', solve);