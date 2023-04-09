const databaseURl = "https://super-student-4ccea-default-rtdb.firebaseio.com"
 
const userName = prompt ('enter your name')
const userPass = prompt ('enter your password')

function createUser () {
    return fetch(`${databaseURl}/users.json`,{
        method: 'POST',
        body:JSON.stringify ({
            name: userName,
            password: userPass 
        }
        )
})
    .then(res => res.json())
    .then(json => console.log(json))    
}

createUser()

// async function b() {
//        console.log('start');
//     await getProducts()
//     console.log('finish');
// }

// b()

// const newObj = {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg" ]
// }

