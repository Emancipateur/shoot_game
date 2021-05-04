const canvas = document.getElementById('canvas')
const score = document.getElementById('score')
const days = document.getElementById('days')
const endscreeen = document.getElementById('endscreen')

daysLeft = 60
gameOverNumber = 50
loopPlay = false


function start(){
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

        let randomTime = Math.round(Math.random() * getFaster)
        getFaster > 700 ? getFaster = (getFaster * 0.99) : ""
        console.log(getFaster);
        

        setTimeout(() => {
            virusPop()
            game()
        },randomTime)
    }



}




function virusPop(){

    let virus = new Image()
    virus.src = "./media/basic-pics/pngwave.png"


    virus.classList.add('virus')
    virus.style.top = Math.random()* 500 + "px"
    virus.style.left = Math.random()* 500 + "px"

    let x,y

    x = y = (Math.random()* 45) + 30
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

