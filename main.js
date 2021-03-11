
let getMyHr = document.querySelector('.hr')
let getMyMn = document.querySelector('.mn')
let getMySc = document.querySelector('.sc')

function myClock(){
    let getDate = new Date

    let getDeg = 6
    let myHours  = getDate.getHours() * 30
    let myMinutes = getDate.getMinutes() * getDeg
    let mySecond  = getDate.getSeconds() * getDeg

    getMyHr.style.transform = `rotate(${myHours + (myMinutes/12)}deg)`
    getMyMn.style.transform = `rotate(${myMinutes}deg)`
    getMySc.style.transform = `rotate(${mySecond}deg)`

}

setInterval(myClock,1000)