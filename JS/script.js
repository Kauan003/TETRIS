let width = 300
let height = 600
let square = 30
let posy = -2
let posx = 3

let row;
let column;
let randomPiece;
let randomIndex;

let A = [
    [0,0,1],
    [0,0,1],
    [0,1,1]
]
let B = [
    [1,0,0],
    [1,0,0],
    [1,1,0],
]
let C = [
    [0,0,0],
    [1,1,0],
    [0,1,1]
]
let D = [
    [0,0,0],
    [0,1,1],
    [1,1,0]
]
let E = [
    [0,0,0],
    [0,1,0],
    [1,1,1]
]
let F = [
    [0,0,0],
    [1,1,0],
    [1,1,0]
]
let G = [
    [0,0,0,0],
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0]
]

let Tetraminos = [A,B,C,D,E,F,G]

let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext("2d")

function makeRandomPieces(){
    randomIndex = Math.floor(Math.random() * Tetraminos.length)
    randomPiece = Tetraminos[randomIndex]
}
makeRandomPieces()
function drawCurrentPieces(){
    for(row=0; row < randomPiece.length; row++){
        for(column=0;column<randomPiece[row].length; column++){
           if(randomPiece[row][column]){
            draw(posx + column, posy+row, square)
            }
        }
    }

 }
 function clearCurrentPieces(){
    for(row=0; row < randomPiece.length; row++){
        for(column=0;column<randomPiece[row].length; column++){
           if(randomPiece[row][column]){
            clear(posx + column, posy+row, square)
            }
        }
    }

 }
 function draw(x,y, square){
    ctx.beginPath()
    ctx.fillRect(x * square, y * square, square,square)
}

function clear(x,y, square){
    ctx.beginPath()
    ctx.clearRect(x * square, y * square, square,square)
}
function drop(){
    
    clearCurrentPieces()
    posy++
    posy <= 17?  posy  : posy = 17
    console.log(posy)
    drawCurrentPieces()
}
 setInterval(drop,1000)
