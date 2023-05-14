import {getItems} from '../../api/api-handlers'

export const game = () => {
    test()

    const qImage = document.getElementById('q-img')
    const btn1 = document.getElementById('answer-btn-one')
    const btn2 = document.getElementById('answer-btn-two')
    const btn3 = document.getElementById('answer-btn-three')
    const result = document.querySelector('.result')
    const question = document.querySelector('.question')
    const total = document.getElementById('total')

    let count = -1
    let goodAnswers = 0
    let q

    btn1.onclick = () => {
    isTrue('answerOne')

        getAnswer()
    }

    function isTrue(number) {
        console.log(q[count]);
        console.log(q[count][number].isTrue);
        if (q[count][number].isTrue == true) {
            goodAnswers++
        }
    }

    btn2.onclick = () => {
            isTrue('answerTwo')

        getAnswer()
    }

    btn3.onclick = () => {
            isTrue('answerThree')

        getAnswer()
    }

    async function test() {
        const arrayOfQuestions = await getItems()
        q = arrayOfQuestions
        getAnswer()
    }

    function getAnswer() {
        qImage.removeAttribute("src")
        
        if (count < q.length) {
            console.log(goodAnswers);
            count++

            if (count === q.length) {
                result.style.display = 'block'
                question.style.display = 'none'
                total.innerHTML = goodAnswers
                return
            }

            qImage.src = q[count].link
            
            btn1.innerText = q[count].answerOne.title
            btn2.innerText = q[count].answerTwo.title
            btn3.innerText = q[count].answerThree.title
        } 
    }
}