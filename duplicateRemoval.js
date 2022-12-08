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

const fixTheName = name => name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const obj2 = obj1.map(item => (fixTheName(item.first_name) + '_' + fixTheName(item.second_name) + '_' + item.dateOfBirthday));

let checkArr = [];
let resultArr =[];
let count = 0;

obj2.forEach((item, index) => {
  if (checkArr.find(copy => copy == item) == undefined) {
    checkArr[count] = item;
    resultArr[count] = obj1[index];
    count++
  }
})

console.log(resultArr);
