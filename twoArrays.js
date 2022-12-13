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
    first_name: "ALex",
    second_name: "pupa",
    dateOfBirthday: 1997,
  },
  {
    first_name: "Andrey",
    second_name: "leps",
    dateOfBirthday: 2005,
  },
  {
    first_name: "Pop",
    second_name: "Kek",
    dateOfBirthday: 2018,
  },
];  

const fixTheName = name => name = name.charAt(0).toUpperCase() + name.slice(1);

const resultObj = obj1.map(item => ({fullname: fixTheName(item.first_name) + '_' + fixTheName(item.second_name), age: item.dateOfBirthday, ifCorresponds: item.dateOfBirthday > 2003}) );

console.log(resultObj);