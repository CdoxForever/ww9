import {getItems} from '../../api/api-handlers'

let count = 0
let q
const qDiv = document.querySelector('.question')

export const test = async () => {
    const arrayOfQuestions = await getItems()
    q = arrayOfQuestions
    if (q.length > 0) {
        const img = document.createElement('img')
        img.src = q[count].link
        const btn1 = document.createElement('button')
        const btn2 = document.createElement('button')
        const btn3 = document.createElement('button')
        
        btn1.innerText = q[count].answerOne.title
        btn2.innerText = q[count].answerTwo.title
        btn3.innerText = q[count].answerThree.title
        qDiv.append(img, btn1, btn2, btn3)
    }

}


