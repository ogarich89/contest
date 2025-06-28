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

const readIntArray = () => {
    const arr = _inputLines[_curLine].trim().split(" ").map(Number);
    _curLine++;
    return arr;
}

const solve = () => {
    const quantity = readInt();
    const days = readIntArray();

    let chaos = 0;

    for (let i = 0; i < quantity; ++i) {
        const previous = days[i - 1] ?? - Infinity;
        const current = days[i];
        const next = days[i + 1] ?? - Infinity;

        if(current > previous && current > next) {
            chaos += 1;
        }
    }
    console.log(chaos);
}

process.stdin.on('end', solve);