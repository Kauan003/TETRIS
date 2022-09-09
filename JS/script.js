let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext("2d")
   
function GameBox(){
     
    ctx.strokeStyle = "black";
    x = 0
    y = 0 
    while(x < 220)
    {
        x+=22
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, 440)
        ctx.stroke()
    }
    while(y < 440)
    {
        y+=22
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(220, y)
        ctx.stroke()
    }
}

function createTetramino(){
    ctx.fillRect(44, 22, 21, 21)
}

canvas.onkeypress = function moveTetramino(event){
    console.log('a')
}

window.addEventListener('load', ()=>{
    GameBox()
    createTetramino()
  
})