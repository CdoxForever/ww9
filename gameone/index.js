const divUserName = document.querySelector('.user-name')
const divUserCount = document.querySelector('.game-count')
const divGame = document.querySelector('.game')

const btnToName = document.getElementById('usename')
const btnToCount = document.getElementById('usecount')
const InpCount = document.getElementById('inpucount')
const InpName = document.getElementById('inpuname')

const ImgRock = document.getElementById('rock')
const ImgPaper = document.getElementById('paper')
const ImgScissors = document.getElementById('scissors')
btnToCount.setAttribute.disable = ('disable', true)
divUserCount.style.display = 'none'
divUserName.style.display = 'block'

const showCount = () => {
    divUserName.style.display = 'none'
    divUserCount.style.display = 'block'
    InpName.removeEventListener('input', disableName)
}
const disableName = () => {
    console.log(InpCount.value.length);
    if(InpName.value.length < 2) {
        btnToCount.setAttribute ('disabled', true)
    } else {
        btnToCount.removeAttribute('disabled')
    }
}
btnToCount.onclick = () => {
    showCount()
}
InpName.addEventListener('input' , disableName)

