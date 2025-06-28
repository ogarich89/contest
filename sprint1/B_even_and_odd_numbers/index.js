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

const checkParity = (number) => Math.abs(number % 2);

const solve = () => {
    const [a, ...numbers] = readIntArray();
    const parity = checkParity(a);

    for(let number of numbers) {
        if(parity !== checkParity(number)) {
            console.log("FAIL")
            return
        }
    }
    console.log("WIN")
}

process.stdin.on('end', solve);