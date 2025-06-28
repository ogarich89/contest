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

const getNeighbors = (matrix, coordinates) => {
    const [row, column] = coordinates;

    const left = matrix[row - 1]?.[column];
    const top = matrix[row]?.[column - 1];
    const right = matrix[row + 1]?.[column];
    const bottom = matrix[row]?.[column + 1];

    return [left, top, right, bottom].filter(number => number !== undefined).sort((a, b) => a - b)
}

const solve = () => {
    const rows = readInt();
    const _ = readInt();
    const matrix = [];
    
    for(let i = 0; i < rows; ++i) {
        matrix[i] = readIntArray();
    }

    const coordinates = [readInt(), readInt()];

    const result = getNeighbors(matrix, coordinates);
    console.log(result.join(" "));
}

process.stdin.on('end', solve);