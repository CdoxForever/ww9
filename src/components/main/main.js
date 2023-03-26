import {getUser} from '../../api/api-handlers'
import {api} from '../../api/fake-api'


const users = []
export const user = async () => {
    await getUser(`${api}users`).then(a => users.push(a.data.users))


    console.log(users)
}

// export const user = async () => {
//     const userFirstName = document.getElementById('user-firstname')
//     const userSecondName = document.getElementById('user-secondname')
//     const avatar = document.getElementById('avatar')
//     avatar.style.width = '50px'
//     avatar.style.height = '50px'
//     avatar.style.borderRadius = '50%'
//
//
//
//     await getUser().then(a => {
//         userFirstName.innerHTML = a.firstname;
//         userSecondName.innerHTML = a.secondname;
//         avatar.src = a.ava
//     })
// }