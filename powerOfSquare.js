const getComplexEquation = (first, second) => (first % 2 == 0) ? Math.ceil((first ** 2 * second) ** 0.5) : Math.ceil((first ** 3 * second) ** 0.5);

console.log(getComplexEquation(+prompt('Enter first number', '5'), +prompt('Enter second number', '9') ) );