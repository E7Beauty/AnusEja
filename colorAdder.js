const colors = ['red', 'blue', 'green', 'yellow', 'black']; 
const objs = [{id: 1, name: 'Alex'}, 
{id: 2, name: 'Oleg'}, 
{id: 3, name: 'Vasiliy'}, 
{id: 4, name: 'Sergey'}, 
{id: 5, name: 'Vladislav'}, 
{id: 6, name: 'Grigoriy'}, 
{id: 7, name: 'Anastasia'}, 
{id: 8, name: 'Egor'}, 
{id: 9, name: 'Svetlana'}, 
{id: 10, name: 'Lana'}, 
{id: 11, name: 'Cat'}, 
{id: 12, name: 'Vyacheslav'}, 
{id: 13, name: 'Ibragim'}, 
{id: 14, name: 'Olga'}, 
{id: 15, name: 'Mikhail'},
];

const n = colors.length;

let getRandomColor = max => { 
  let x = Math.floor(Math.random() * max);
  return colors[x];
};

const newObjs = objs.map((item, index) => {
  const container = {};

  container.id = item.id;
  container.name = item.name;
  container.color = getRandomColor(n);

  return container;
});

newObjs.forEach (item => {
  console.log(item);
});
