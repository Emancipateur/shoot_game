const canvas = document.getElementById('canvas')
const score = document.getElementById('score')
const days = document.getElementById('days')
const endscreeen = document.getElementById('endscreen')







virusPop()

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

