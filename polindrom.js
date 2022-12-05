//is the entered word a palindrome?

const word = prompt('Enter your word','wow');
let counter = 0;

for ( let i = 0; i < word.length; i++ ) {
  if (word[i] != word[word.length - i - 1]) {
    console.log('Слово', word, 'НЕ является полиндромом!')
    break;
  } else {
    counter++;
  }
}

if ( counter == word.length ) {
  console.log('Слово', word, 'является полиндромом!')
}
