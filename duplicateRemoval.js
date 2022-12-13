const obj1 = [
  {
    first_name: "Misha",
    second_name: "ivanushchenko",
    dateOfBirthday: 1999,
  },
  {
    first_name: "OLeg",
    second_name: "lupa",
    dateOfBirthday: 1974,
  },
  {
    first_name: "Pop",
    second_name: "Kek",
    dateOfBirthday: 2018,
  },
  {
    first_name: "POP",
    second_name: "Kek",
    dateOfBirthday: 2018,
  },
  {
    first_name: "OLeg",
    second_name: "lupa",
    dateOfBirthday: 1974,
  },
  {
    first_name: "OLeg",
    second_name: "lupa",
    dateOfBirthday: 1974,
  },
]; 

const fixTheName = name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const obj2 = obj1.map(item => (fixTheName(item.first_name) + '_' + fixTheName(item.second_name) + '_' + item.dateOfBirthday));

let checkArr = [];
let resultArr =[];

obj2.forEach((item, index) => {
  if (!checkArr.includes(item)) {
    checkArr.push(item);
    resultArr.push(obj1[index]);
  }
})

console.log(resultArr);
