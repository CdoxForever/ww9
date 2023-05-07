import {getItems} from '../../api/api-handlers'

export const game = () => {

    test()

    const qImage = document.getElementById('q-img')
    const btn1 = document.getElementById('answer-btn-one')
    const btn2 = document.getElementById('answer-btn-two')
    const btn3 = document.getElementById('answer-btn-three')
    const result = document.querySelector('.result')
    const question = document.querySelector('.question')



    let count = 0
    let goodAnswers = 0
    let q

    btn1.onclick = () => {
        count++

        console.log(q[count]);
        if (q[count].answerOne.isTrue == true) {
            goodAnswers++
        }

        getAnswer()
    }

    btn2.onclick = () => {
        count++

        if (q[count].answerTwo.isTrue == true) {
            goodAnswers++
        }
        getAnswer()
    }

    btn3.onclick = () => {
        count++

        if (q[count].answerThree.isTrue == true) {
            goodAnswers++
        }
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
            if (q.length > 0) {
                qImage.src = q[count].link
                
                btn1.innerText = q[count].answerOne.title
                btn2.innerText = q[count].answerTwo.title
                btn3.innerText = q[count].answerThree.title
                // qDiv.append(img, btn1, btn2, btn3)
            }
            console.log(count);
            // alert('dsd')
        } else {
            
            alert('lol')
            result.style.display = 'block'
        }
    }



}