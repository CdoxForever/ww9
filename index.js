const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')

const hourInp = document.getElementById('hour-inp')
const minImp = document.getElementById('min-inp')
const secInp = document.getElementById('sec-inp')
const btn = document.getElementById('btn')

hour.innerHTML = 00
min.innerHTML = 00
sec.innerHTML = 00

let hourCount = +hourInp.value
let minCount = +minImp.value
let secCount = +secInp.value

if (secCount === 0) {
    secCount = 60
    }

if (hourCount !== 0) {
    hourCount--
}

if (minCount !== 0) {
    hourCount--
}



btn.onclick = () => {
    setTimer()
    console.log(+hourInp.value);
    console.log(+minImp.value);
    console.log(+secInp.value);    
}

const setTimer = () =>  {
    const timer = setInterval( () => {
        secCount--

        if (hourCount === 0 && minCount === 0 && secCount === 0) {
            hour.innerHTML = '00'
            min.innerHTML = '00'
            sec.innerHTML = '00'
            clearInterval(timer)
            alert('interval is stoped')
        }




        if (minCount === 0 && hourCount !== 0) {
            minCount = 60
            if (hourCount !== 0) {
                hourCount--
            }
        }


        if (hourCount < 10 ) {
            hour.innerHTML = '0' + hourCount
        }
        if (hourCount !== 0 && minCount !== 0 && secCount === 0) {
            secCount = 60
            if (minCount !== 0) {
                minCount--
            }

        }

        if (minCount === 60) {
            min.innerHTML = '00'
        } else if (minCount < 10) {
            min.innerHTML = '0' + minCount
        } else {
            min.innerHTML =  minCount
        }

        if (secCount === 60) {
            sec.innerHTML = '00'
        } else if (secCount < 10) {
            sec.innerHTML = '0' + secCount
        } else {
            sec.innerHTML =  secCount
        }
        
    }, 1)    
}

