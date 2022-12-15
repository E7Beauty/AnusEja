let sum = 0;

document.getElementById('elementPlus').addEventListener("click", () => {
  document.getElementById('result-one').innerHTML = ++sum;
});
document.getElementById('elementMinus').addEventListener("click", () => {
  document.getElementById('result-one').innerHTML = --sum; 
});

const expandTheMachine = () => {
  document.getElementById('partone').hidden = true;
  document.getElementById('parttwo').hidden = false;
}

document.getElementById('more').addEventListener("click", expandTheMachine)

const actions = ['/', '*', '-', '+'];

const nodeList = document.querySelectorAll('input.element');

const idArray = [];

nodeList.forEach(item => {
  idArray.push(item.id.slice(5));
});

const findResult = () => document.getElementById('result');

const calcTwoNumbers = (firstNumber, sign, secondNumber) => {

  firstNumber =  firstNumber == '' ? 0 : firstNumber;

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

idArray.forEach((item, index) => {
  switch (item) {
    case ('delete'):
      nodeList[index].addEventListener("click", () => {
        if (findResult().value[findResult().value.length - 2] == ' ') {
          findResult().value = findResult().value.slice(0, findResult().value.length - 2);
        } else {
        findResult().value = findResult().value.slice(0, findResult().value.length - 1);
        }
      });
      break;
    case ('clear'):
      nodeList[index].addEventListener("click", () => {
        findResult().value = '';
      });
      break;
    case ('='):
      nodeList[index].addEventListener("click", () => {
        findResult().value = calcResult();
      });
      break;
    case ('/'):
    case ('*'):
    case ('+'):
      nodeList[index].addEventListener("click", () => {
        if ( (actions.includes(findResult().value[findResult().value.length - 2])) && (findResult().value[findResult().value.length - 1] == ' ') ) {   
        findResult().value = findResult().value.slice(0, findResult().value.length - 2) + (item + ' ');
      } else {
        findResult().value += (' ' + item + ' ');
      }
    });
      break;
    case ('-'):
      nodeList[index].addEventListener("click", () => { 
        if (findResult().value === '') {
         return findResult().value += item;
        } 
        if ( (actions.includes(findResult().value[findResult().value.length - 2])) && (findResult().value[findResult().value.length - 1] == ' ') ) {
          return findResult().value = findResult().value.slice(0, findResult().value.length - 2) + (item + ' ');
        } else {
          return findResult().value += (' ' + item + ' ');
        }         
      });
      break;
    default: 
    nodeList[index].addEventListener("click", () => {
      findResult().value += item;
    });    
  }
});