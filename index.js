// const obj = {
//     firstname: 'lalalas',
//     secondname:'sdfjsdf',
//     info : function(phone, email) {
//         console.log(`${this.firstname} ${this.secondname}`);//this именно этот чт4ука
//         if(phone && email){
//         console.log('phone', phone);
//         console.log('Email', email);   
//         }

//     }    
// }
// obj.info()

// const o1 = {
//     firstname: 'mikr',
//     secondname: 'ertertert'

// }

//  const bindFunction =  obj.info.bind(o1)//bind соззждает новую на основе контекста, отнтсительно чего смотрим нужно вызывать
//  bindFunction('1-111-111-1', 'emaiol@gmaoil')

// const o2 = {
//     firstname: 'peter',
//     secondname: 'eyuirw'
// }

// obj.info.call(o2, '22-222-222-4', 'prerer@gmsil')// но ненужно вызывать, первым папрметром контекст дальше параметры фыункции

// const o3 = {
//     firstname: 'doctor',
//     secondname: 'who'
// }
// obj.info.apply(o2,['666-666-667', 'yadnexfignyas.@opyi'])//ненужнло вывзвать, первым прасмметром котекст вторым массив аргументов для функции




// //Promises
// // resolve завершился учспехно reject завершился неуспешно
// const promis = new Promise( function(resolve,reject)  {
//     // setTimeout( () => resolve('done'), 2000 )
//     setTimeout( () => reject('error'), 2000 )
// })

// console.log(promis);
// promis.then(
//     result => console.log(result)//,
//     // error => console.log(error)
// )
// .catch(error => console.log(error))
// .finally( () => console.log('finnally'))

// const url = 'https://jsonplaceholder.typicode.com/users/1'
// const f = async () => {
//     await fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch (error => console.log(error))
// }


// const a = async () => {
//     console.log('start');
//     await f()
//     console.log('end');
// }

// a()

// const a = async () => {
//     console.log('start');
//      setTimeout ( () => console.log('setTimreout'), 1000 ) 
//     console.log('end');
// }

// a()

// const err = () => {
//     throw 'some error' //создает ошибку
// }

// const tryCatch = async () => {
//     try{
//     await a()
//         // err()
//     } catch (error){
//         console.log(error);
//     } finally {
//         console.log('finally');
//     }
// }

// tryCatch()

// const usersUrl = 'https://jsonplaceholder.typicode.com/users'
// function getUsers(){
//     fetch(usersUrl)
//         .then(response => response.json())
//         .then (users => console.log(users))
// }
// getUsers()

const url = 'https://jsonplaceholder.typicode.com/users/1'
   async function getUsers() {
        let arr;
         fetch(usersUrl)
        .then(response => response.json())
        .then(users => arr = users)
        console.log(arr);

}
getUsers()

const usersArray = getUsers()
console.log(usersArray);