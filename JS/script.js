let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext("2d")
   


    let bloco = {
        alt: 28,
        larg: 28,
        posY: 0,
        posX: 84,
    }
    let space = {
        largura: 220,
        altura: 392,
    }

function move(X,Y){
    ctx.beginPath();
    ctx.fillRect(X,Y,bloco.larg,bloco.alt)
    ctx.stroke();
}
    

function moveTetramino(event){
    if(event.key === "ArrowDown"){
        clear()
       bloco.posY += 28
       bloco.posY  <= 392? bloco.posY : bloco.posY = 392
       move(bloco.posX, bloco.posY) 
    }
    if(event.key === "ArrowRight"){
        clear()
       bloco.posX += 28
       bloco.posX <= 196 ? bloco.posX : bloco.posX = 196
       move(bloco.posX, bloco.posY)   
    }
    if(event.key === "ArrowLeft"){
        clear()
       bloco.posX -= 28
       bloco.posX < 0 ? bloco.posX = 0 : bloco.posX 
       move(bloco.posX, bloco.posY)   
    }
   if(event.key === " "){
    clear()
    bloco.posY = space.altura
    move(bloco.posX, bloco.posY)
   }
}
function clear(){
      ctx.beginPath();
      ctx.clearRect(bloco.posX,bloco.posY,bloco.larg ,bloco.alt)
      ctx.stroke();    
}

function MoveDown(){
    clear()
    bloco.posY += 28
    bloco.posY  <= 392 ? bloco.posY : bloco.posY = 392
    console.log(bloco)
    move(bloco.posX, bloco.posY) 
}
window.addEventListener('keydown', moveTetramino)
window.addEventListener('load', ()=>{
    move(bloco.posX,bloco.posY)
    setInterval(MoveDown,800);
})