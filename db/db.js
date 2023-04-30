const pic = document.getElementById('pic')
const ttlone = document.getElementById('ttlone')
const true_one = document.getElementById('is-true-one')
const ttltwo = document.getElementById('ttltwo')
const true_two = document.getElementById('is-true-two')
const ttlthree = document.getElementById('ttlthree')
const true_three = document.getElementById('is-true-three')
const btn = document.getElementById('btn')

const db_url = 'https://super-student-4ccea-default-rtdb.firebaseio.com'

btn.onclick = () => {
    const data = {
        link: pic.value,
        answerOne: {
            title: ttltwo.value,
            isTrue: !!true_one.value
        },
        answerTwo: {
            title: ttlone.value,
            isTrue: !!true_two.value
        },
        answerThree: {
            title: ttlthree.value,
            isTrue: !!true_three.value
        },
    }

    console.log(data);

    return fetch(`${db_url}/questions.json`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch( error => {
        console.log(error);
    });
}