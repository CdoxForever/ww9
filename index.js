// const btn1 = document.getElementById('btn1')
// console.log(btn1);
// const btn2_1 = document.querySelector('.btn2')
// const btn2_2 = document.querySelector('#btn2')
// // console.log(btn2_1);
// // console.log(btn2_2);


// const li = document.querySelectorAll('li')
// console.log(li);

// for (let elem of li) {
//     console.log(elem.matches('li[value="6"]'));
// }

// const chapter = document.querySelector('.chapter');
// console.log(chapter.closest('.book'));
// console.log(chapter.closest('.soderzanie'));//показыввает епоказыввает родителя 
// console.log(chapter.closest('h1'));

// const inpWrite = document.querySelector('#texto')
// inpWrite.addEventListener('change', () => { //чендж это показываень изменения
//     console.log(inpWrite.value);
// })

// const inpWrite = document.querySelector('#texto')
// inpWrite.addEventListener('input', () => { //input показывает в реальном времени
//     console.log(inpWrite.value);
// })

const inpWrite = document.querySelector('#texto')
const p = document.querySelector('#p')
const remove = document.querySelector('#btn-rem')
p.innerHTML = 'Hello'

const inputFunc = () => {
    console.log(inpWrite.value);
    p.innerHTML = inpWrite.value
}

inpWrite.addEventListener('input', inputFunc)

remove.onclick = () => {
    alert('remove listener from input')
    inpWrite.value = ''
    inpWrite.removeEventListener('input', inputFunc)
}

// inpWrite.addEventListener('input', () => { //input показывает в реальном времени
//     console.log(inpWrite.value);
//     p.innerHTML = inpWrite.value // в параграф пишеться то что записанло в константу
// })

