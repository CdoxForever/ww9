// const age = prompt()

// if (age > 18) {
//     console.log('true');
// } else if (age < 18) {
//     console.log('false');
// } else {
//     console.log('=18');
// }
// ==//равны ли они несмотрч на тип даннгых
// ===//равны лдт они смотря на ьтип данных
// !==//смотрит несмотяр на тип даных и это знаичт не равно
// !===//смотримт смотря на тип данных и это значит не равно

// const n = 'niggers'
// if (n != 'niggers'){
//     console.log('yes');
// }

// console.log(1 == '1');

// console.log(2483 % 2);

// const userName = 'mike'

// switch (userName) {
//         case 'mike':
//         console.log('hello,mike');
//         break;
//         case 'nick':
//         console.log('hello,nick');
//         break;
//         case 'mary':
//         console.log('hello, mary');
//         break;

//     default:
//         console.log('who are you?');
//         break;
// }

// const sex = 'man'
// const age = 30
// const haircolor = 'blue'

// if (sex === 'man' || age >=30 && haircolor !== 'blue') {
//     console.log('u r welcome');
// } else {
//     console.log('sorry');
    
// }

// let i = 0
// while(i < 5) {
//     alert(i)// выводит в мождалбь ном окне что в его вводят
//     i++// прибавляет 1
// }

// let j = 5

// do {
//     console.log('j =',j);
//     j++
// }while(j< 5);                          

// for (let i = 0; i < 100; i++) {
//     if ( i % 2 !== 0)// чьтобы было четное иль нечетное 
//     {
//         console.log(i);
//     }
// } 

const arr = [0,1,2,3,4,5,6,7,8,9]
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] % 2 === 0 &&  i % 2 !== 0){
//           console.log(arr[i]); 
//     }
// }

let sum = 0

for (let i = 0; i < arr.length; i++){
    sum += arr[i]
    console.log(sum);
}

