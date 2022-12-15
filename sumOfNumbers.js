const numbers = [];

for (let i = 0; i < 15; i++) {
  numbers[i] = Math.floor(Math.random() * (i + 5));
}

console.log('Initial array is', numbers);

const getSum = ((arr, number = +prompt('Enter your number','25')) => {
  let sum = 0;
  const arrResult = [];
  for (const item of arr) {    
    if ((sum + item) < number) {
      sum += item;
      arrResult.push(item);
    }
  }
  console.log('There are', arrResult.length, 'numbers whose sum is less than', number, 'these are:', arrResult, 'sum is:', sum);
})

getSum(numbers);