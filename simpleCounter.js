let sum = 0;

const getPlus = () => document.getElementById('result-one').innerHTML = ++sum;
const getMinus = () => document.getElementById('result-one').innerHTML = --sum;

document.getElementById('elementPlus').addEventListener("click", getPlus);
document.getElementById('elementMinus').addEventListener("click", getMinus);

const expandTheMachine = () => {
  document.getElementById('partone').hidden = true;
  document.getElementById('parttwo').hidden = false;
}

document.getElementById('more').addEventListener("click", expandTheMachine)

const actions = ['/', '*', '-', '+'];

const nodeList = document.querySelectorAll('input.element');

const idArray = [];

nodeList.forEach((item, index) => {
  idArray[index] = item.id.slice(5);
});

const findResult = () => document.getElementById('result');

const calcTwoNumbers = (firstNumber, sign, secondNumber) => { 
  if (firstNumber == '') {
    firstNumber = 0;
  }
  switch (sign) {
    case '*':
      return +firstNumber * +secondNumber;
    case '-':
      return +firstNumber - +secondNumber;
    case '+':
      return +firstNumber + +secondNumber;
    case '/':
      return +firstNumber / +secondNumber;
  }
}

const calcResult = () => {

  let resultArr = findResult().value.split(' ');


  while (resultArr.findIndex(item => +item < 0) != -1 && resultArr.includes('')) {
    if (resultArr.findLastIndex(item => item == '') != 0) {
    resultArr.splice(resultArr.findLastIndex(item => +item < 0) - 1, 1);
    }
  } 

  resultArr = actions.includes(resultArr[resultArr.length - 1]) ? resultArr.slice(0, resultArr.length - 1) : resultArr; 

  if (resultArr.length >= 3) {
    while (resultArr.length > 1) {
      let index = 0;

      index = resultArr.findIndex(item => item == '*');
      if (index != -1) {
        resultArr.splice(index - 1, 3, calcTwoNumbers(resultArr[index - 1], resultArr[index], resultArr[index + 1]));
        continue;
      } 

      index = resultArr.findIndex(item => item == '/');
      if (index != -1) {
        resultArr.splice(index - 1, 3, calcTwoNumbers(resultArr[index - 1], resultArr[index], resultArr[index + 1]));
        continue;
      }

      index = resultArr.findIndex(item => item == '+');
      if (index != -1) {
        resultArr.splice(index - 1, 3, calcTwoNumbers(resultArr[index - 1], resultArr[index], resultArr[index + 1]));
        continue;
      }

      index = resultArr.findIndex(item => item == '-');
      if (index != -1) {
        resultArr.splice(index - 1, 3, calcTwoNumbers(resultArr[index - 1], resultArr[index], resultArr[index + 1]));
        continue;
      }
    }
  } else {
    return findResult().value;
  }
  return resultArr[0];
}

idArray.forEach((item, index) => {//adding event listeners to every button
  switch (item) {
    case ('delete'):
      nodeList[index].addEventListener("click", function () {
        if (findResult().value[findResult().value.length - 2] == ' ') {
          findResult().value = findResult().value.slice(0, findResult().value.length - 2);
        } else {
        findResult().value = findResult().value.slice(0, findResult().value.length - 1);
        }
      });
      break;
    case ('clear'):
      nodeList[index].addEventListener("click", function () {
        findResult().value = '';
      });
      break;
    case ('='):
      nodeList[index].addEventListener("click", function () {
        findResult().value = calcResult();
      });
      break;
    case ('/'):
    case ('*'):
    case ('+'):
      nodeList[index].addEventListener("click", function () {
      if (findResult().value.length > 2 
      && ((actions.includes(findResult().value[findResult().value.length - 2]) && findResult().value[findResult().value.length - 1] == ' ') || findResult().value[findResult().value.length - 2] != ' ') ) {
        if (findResult().value[findResult().value.length - 1] == '-') {
          findResult().value = '';
        }        
        findResult().value = findResult().value.slice(0, findResult().value.length - 2) + (item + ' ');
      } else {
        findResult().value += (' ' + item + ' ');
      }
    });
      break;
    case ('-'):
      nodeList[index].addEventListener("click", function () { 
        if (findResult().value[findResult().value.length - 1] == '-') {
          findResult().value = findResult().value.slice(0, findResult().value.length - 4);
        }
        if ((actions.includes(findResult().value[findResult().value.length - 2]) && findResult().value[findResult().value.length - 1] == ' ') || findResult().value === '') {
          findResult().value += (item);
        } else {
          findResult().value += (' ' + item + ' ');
        }
      });
      break;
    default: 
    nodeList[index].addEventListener("click", function () {
      findResult().value = (findResult().value + item);
    });    
  }
});

