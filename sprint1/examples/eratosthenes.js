// O(n log(log n))
function eratosthenes(n) {
  const numbers = new Array(n + 1).fill(true);
  numbers[0] = numbers[1] = false;
  for (let num = 2; num < n; num++) {
    if (numbers[num]) {
      for (let j = 2 * num; j <= n; j += num) {
        numbers[j] = false;
      }
    }
  }
  return numbers;
}

function eratosthenesEffective(n) {
  const numbers = new Array(n + 1).fill(true);
  numbers[0] = numbers[1] = false;
  for (let number = 2; number < n; number++) {
    if (numbers[number]) {
      for (let j = number * number; j <= n; j += number) {
        numbers[j] = false;
      }
    }
  }
  return numbers;
}