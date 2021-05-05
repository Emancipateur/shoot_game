const canvas = document.getElementById('canvas')
const score = document.getElementById('score')
const days = document.getElementById('days')
const endScreen = document.getElementById('endScreen')
const faster = document.getElementById('faster')

daysLeft = 60
gameOverNumber = 40
loopPlay = false



function start(){
    var guncock = new Audio("./media/basic-pics/guncocking.wav")
    guncock.play()
    count = 0
    getFaster = 6000
    daysRemaining = daysLeft

    canvas.innerHTML = ""
    score.innerHTML = count
    days.innerHTML = daysRemaining
    

      



    // make sure to not play loop 
    loopPlay ? '' : game()
    loopPlay = true


    function game(){
// de plus en pus rapide
        let randomTime = Math.round(Math.random() * getFaster)
        getFaster > 1000 ? getFaster = (getFaster * 0.95) : ""
        faster.innerHTML = getFaster
       


        console.log(canvas.childElementCount);
        

        setTimeout(() => {
            if(daysRemaining === 0){
                youWin()
            }else if (canvas.childElementCount < gameOverNumber){
                virusPop()
                game()
            } else {
                gameOver()
            }
        },randomTime)

        const gameOver = ( () => {
            endScreen.innerHTML = `<div class="gameOver">Game over <br/>score : ${count}</div>`
            endScreen.style.visibility = ' visible'
            endScreen.style.opacity = 1
            loopPlay = false
        })
    }


        const youWin = () => {
            let accuracy = Math.round(count / daysLeft * 100)
            endScreen.innerHTML = `<div class="youWin">Bravo ! Tu as gagné<br><span>précision : ${accuracy}%</span></div>`
            endScreen.style.visibility = ' visible'
            endScreen.style.opacity = 1
            loopPlay = false
        }



}

let ennemy = [ "./media/basic-pics/lapin.png", "./media/basic-pics/sonic.png"]


function virusPop(){

    let virus = new Image()
    virus.src = "./media/basic-pics/lapin.png"


    virus.classList.add('virus')
    virus.style.top = Math.random()* 400 + "px"
    virus.style.left = Math.random()* 400 + "px"

    let x,y

    x = y = (Math.random()* 45) + 100
    virus.style.setProperty('--x',`${ x }px`)
    virus.style.setProperty('--y',`${ y }px`)

    let plusMinus = Math.random() < 0.5 ? -1 : 1
    let trX = Math.random() * 500 * plusMinus
    let trY = Math.random() * 500 * plusMinus
    virus.style.setProperty('--trX',`${trX}%`)
    virus.style.setProperty('--trY',`${trY}%`)

    canvas.appendChild(virus)

}


// remove virus when click
document.addEventListener('click', function(e){
    let targetElement = e.target 

    if(targetElement.classList.contains('virus')){
        targetElement.remove()
        count++
        score.innerHTML = count
    }
})
// count down click


canvas.addEventListener('click', () => {
    if(daysRemaining > 0) {
        daysRemaining--
        days.innerHTML = daysRemaining
    }
})

// hide endscreen after click

endScreen.addEventListener('click', () => {

    start()
    endScreen.style.opacity = 0
    endScreen.style.visibility = 'hidden'
})


document.addEventListener('click', (e) => {
   if(e.target.id !== "start")
    var audio = new Audio("./media/basic-pics/gunshot.mp3")
    audio.play()
})  