// const car = {
//     marka : 'Nissan',
//     seria : 'Gtr-R35',
//     color : 'black, red', 
//     year : 2020,
//     price : 1000000,
//     engine : 2.0,
//     transmission : 'auto',
//     fuel : 'diesel'
// } 

// console.log(car)

// for (let key in car) {
//     console.log(`свойства ${key} : ${car[key]}`);
// }

const name = prompt("Введите ваше имя:");
const spaceId = prompt("Введите ID :");
const spacePassword = prompt("Введите пароль :");

const userData = {
  name: name,
  ID: spaceId,
  password: spacePassword,
};

console.log(userData);
