let getRandomInt = (max) => { //if max == 3, then possible results are: 0,1,2
  return Math.floor(Math.random() * max); 
}

let showPairs = (first, second) => { 
   console.log(givers[first], recipients[second]);
}

const n = +prompt('Enter number of people participating in Secret Santa', 5);
let givers = [];
let recipients = [];
let randomNumber = 0;

for (let i = 0; i < n; i++) { 
  givers.push(i + 1);
  recipients.push(i + 1);
}

for (i = 0; i < (n - 2) ; i++) {
  randomNumber = getRandomInt(recipients.length);
  while ( recipients[randomNumber] == givers[i] ) { 
    randomNumber = getRandomInt(recipients.length); 
  }
  showPairs(i, randomNumber);
  recipients.splice(randomNumber, 1); 
}

if ( givers[i] != recipients[1] ) { //calculating two last pairs
  showPairs(i, 1);
  showPairs(i + 1, 0);
} else {
  showPairs(i, 0);
  showPairs(i + 1, 1);
}



