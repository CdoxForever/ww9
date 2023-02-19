const divUserName = document.querySelector('.user-name')
const divGameCount = document.querySelector('.game-count')
const divGame = document.querySelector('.game')

const inputName = document.getElementById('name')
const btnToCount = document.getElementById('to-count')
const inputCount = document.getElementById('count')
const btnToGame = document.getElementById('to-game')

const rockPic = document.getElementById('rock')
const scissorsPic = document.getElementById('scissors')
const paperPic = document.getElementById('paper')

const gamesAll = document.getElementById('game-all')
const userWin = document.getElementById('user-win')
const pcWin = document.getElementById('pc-win')

const divResult = document.querySelector('.result')
const spanResult = document.querySelector('#result')

let gamesCount = 1

btnToCount.setAttribute('disabled', true)
divGameCount.style.display = 'none'
divGame.style.display = 'none'

const divMiddleResult = document.querySelector('.middle-result')
const spanMiddleResult = document.getElementById('middle-result')

const showCount = () => {
    divUserName.style.display = 'none'
    divGameCount.style.display = 'block'
    inputName.removeEventListener('input', disableName)

}

const disableName = () => {
    if (inputName.value.length < 2) {
        btnToCount.setAttribute('disabled', true)
    } else {
        btnToCount.removeAttribute('disabled')
    }
}

btnToCount.onclick = () => {
    showCount()
} 

btnToGame.onclick = ()  => {
    gamesCount = inputCount.value;    
    divGameCount.style.display ='none'
    divGame.style.display ='block'
    console.log(gamesCount);
}

inputName.addEventListener('input', disableName)


const PC_CHOOSE = ['stone','scissors','paper']

let countGames = 0
let pcCountWin = 0
let userCounterWin = 0
const gameCounter = (winner,user,pc) => {
    switch (winner) {
        case 'user':
            userCounterWin++
            break;
            case 'pc':
            pcCountWin++
            break;
    }
    countGames++
    gamesAll.innerHTML = countGames
    userWin.innerHTML = userCounterWin
    pcWin.innerHTML = pcCountWin
    spanMiddleResult.innerHTML = `PC choose ${pc} , You Choose ${user}`
    divMiddleResult.style.display = 'block'

    setTimeout(() => {
        divMiddleResult.style.display = 'none'
    },2000)
    console.log('countGames', countGames);
console.log('gamesCount', +gamesCount);


if (countGames === +gamesCount) {
    console.log('end');
    if (userCounterWin > pcCountWin) {
        spanResult.innerHTML = `Вы победили`
    } else if (userCounterWin < pcCountWin) {
        spanResult.innerHTML = `Вы проиграли`
    } else {
        spanResult.innerHTML = `Ничья`
    }
    divResult.style.display = 'block'  
    rockPic.style.display = 'none' 
    scissorsPic.style.display = 'none' 
    paperPic.style.display = 'none' 
}

}



rockPic.onclick = () =>{
    const user = 'stone'
    const pc = PC_CHOOSE[Math.floor(Math.random()*3)]

    switch (pc) {
        case 'stone':
            gameCounter(null, user ,pc)
            break;
            case 'paper':
            gameCounter('pc', user ,pc)
            break;
            case 'scissors':
            gameCounter('user', user ,pc)
            break;
    }
}
scissorsPic.onclick = () =>{
    const pc = PC_CHOOSE[Math.floor(Math.random()*3)]
    const user = 'scissors'
    switch (pc) {
        case 'stone':
            gameCounter('pc', user ,pc)
            break;
        case 'paper':
            gameCounter('user', user ,pc)
            break;
            case 'scissors':
                gameCounter(null, user ,pc)
            break;
    }
}
paperPic.onclick = () =>{
    const user = 'paper'
    const pc = PC_CHOOSE[Math.floor(Math.random()*3)]
    switch (pc) {
        case 'stone':
            gameCounter('user', user ,pc)
            break;
        case 'paper':
            gameCounter(null, user ,pc)
            break;
        case 'scissors':
            gameCounter('pc', user ,pc)
            break;
    }
}

