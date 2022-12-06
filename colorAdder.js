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

const getRandomColor = max => Math.floor(Math.random() * max);

const newObjs = objs.map(item => ({...item, color: colors[getRandomColor(colors.length)] }) );

newObjs.forEach(item => console.log(item));
