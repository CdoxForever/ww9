// const obj = {}
// const obj2 = new Object()
// console.log(obj);
// console.log(obj2);

// const obj = {
//     name: 'Jokoi',
//     age: 45,
//     sex: 'tain',
//     job: 'student'
// }
// console.log(obj);
// const objKeys = Object.keys(obj)
// console.log(objKeys);
// const objValues = Object.values(obj)
// console.log(objValues);

// console.log(obj.isMared);
// obj.isMared = true 
// console.log(obj.isMared);
// obj.sex = 'cdox'
// console.log(obj);
// const obj2 = obj
// console.log(obj2);
// obj.field = 'qwerty'
// console.log(obj);
// console.log(obj2);

// const obj3 = {}

// for (let prop in obj){//prop = свойста
//  console.log(prop);
//  obj3[prop] = obj[prop]
// }
// console.log(obj);
// console.log(obj3);

// obj3.lol = 'lol'
// console.log(obj3);

// const obj4 = Object.assign(obj)// если изменить obj4 cто obj  тоже измениться
// obj4.lol = 'lol'
// console.log(obj4);
// const obj5 = Object.freeze(obj)
// obj5.lol = 'lol'
// console.log(obj5,obj5);
// console.log(obj.hasOwnProperty('sex'));//есть ли

// function sayHello (params) {
//      console.log('hello!');   
// }

// sayHello()
// sayHello()

// function summ(a,b) {
//     console.log(a+b);    
// }

// summ(4,56)
// summ(56,25)

// function summ (a,b,c) {
//     console.log(a+b-c);
// }

// summ (3,2,1)
// summ(1,2,3)

// const summ2 = function(a,b,c) {
//     console.log(a+b-c);
// }


// summ (3,2,1)
// summ(1,2,3)

// const summ3 = (a,b,c) => console.log(a+b-c);

// summ3(3,2,1)
// summ3(1,2,3)

//window.onload ---> как только произойдет загрузщка окна

// (function() {
//     console.log('hello');
// }
//     )

// function args (a,b,c, ...args) {
//     const sum = a+b+c
//     console.log(args);
// }
// args(1,2,3,4,5,6,7,8,9) // вывожик числа как строкую не как массив

// function args (a,b,c, ...rest) {
//     const sum = a+b+c
//     console.log(rest);
// }
// args(1,2,3,4,5,6,7,8,9) // слюирает в массив оставщшиесмчя аргументы

// const arr = [5,4,3,2,1]
// console.log(...arr);

function uravnenie (a,b,c){
   console.log(b*b-4*a*c);
}

