let numbers = {
  1: true
};

let i = 1;
while (i < 100) {
  const newNumbers = {};

  i = i + 2;
  let temp = i;

  while (!numbers[temp]) {
    newNumbers[temp] = true;
    // process.stdout.write(`${temp} `);
    temp = getNextOdd(temp);
  }

  // if (Object.keys(newNumbers).length) {
  // Object.keys(newNumbers).map(number => (+number).toString(2)).join(" ")
  // }

  numbers = {...numbers, ...newNumbers};
}

function getNextOdd(temp) {
  temp = temp * 3 + 1;

  while (temp % 2 === 0) {
    temp = temp / 2;
  }

  return temp;
}