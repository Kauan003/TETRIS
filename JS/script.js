
let A_rotate = [
 
    [
        [0,0,0],
        [1,0,0],
        [1,1,1]
    ],
    [
        [1,1,0],
        [1,0,0],
        [1,0,0]
    ]

]
let B_rotate = [
    [
        [0,0,0],
        [0,0,1],
        [1,1,1],
    ],
    [
        [0,1,1],
        [0,0,1],
        [0,0,1],
    ]
]
let C_rotate = [
    [0,1,0],
    [1,1,0],
    [1,0,0]
]
let D_rotate = [
    [1,0,0],
    [1,1,0],
    [0,1,0]
]
let E_rotate  = [
    [
        [0,1,0],
        [0,1,1],
        [0,1,0]
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,1,0]
    ]
]
let F_rotate = [
    [0,0,0],
    [1,1,0],
    [1,1,0]
]
let G_rotate  = [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
]

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

let width = 300
let height = 600
let square = 30
let posy = -2
let posx = 3

let row;
let column;
let Piece;
let randomIndex;
let color;

let Tetraminos = [A,B,C,D,E,F,G]
let colors = ["blue","yellow","red", "green","pink","orange", "purple"]
let rotations = [A_rotate, B_rotate,C_rotate,D_rotate,E_rotate,F_rotate,G_rotate]
 

let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext("2d")

function makeRandomPieces(){
    randomIndex = Math.floor(Math.random() * Tetraminos.length)
    Piece = Tetraminos[randomIndex]
    color = colors[randomIndex]
}

makeRandomPieces()
console.log(color)
function drawCurrentPieces(){
    for(row=0; row < Piece.length; row++){
        for(column=0;column<Piece[row].length; column++){
           if(Piece[row][column]){
            draw(posx + column, posy+row, square, color)
            }
        }
    }

 }
 function clearCurrentPieces(){
    for(row=0; row < Piece.length; row++){
        for(column=0;column<Piece[row].length; column++){
           if(Piece[row][column]){
            clear(posx + column, posy+row, square)
            }
        }
    }

 }
 function draw(x,y, square, color){
    ctx.fillStyle = color
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
    drawCurrentPieces()
}

function moveLeft(){
    clearCurrentPieces()
    posx --
    drawCurrentPieces()
}

function moveRight(){
    clearCurrentPieces()
    posx ++
    drawCurrentPieces()
}

function moveDown(){
    clearCurrentPieces()
    posy ++
    drawCurrentPieces()
}

let i = -1
let rotatePiece = rotations[randomIndex]

function rotate(){
    clearCurrentPieces()
    j = 0 
    i+=1
    if(rotatePiece.length === 2) {
        if(i <= -1 + rotatePiece.length){
            Piece = rotatePiece[i]
        }
        if(i >1){
            Piece = Tetraminos[randomIndex]
            i =-1
        }
    }
    if(rotatePiece.length > 2){
        Piece = rotatePiece
    }
    
    drawCurrentPieces()
}

window.addEventListener('keydown', (event)=>{
    if(event.key === "ArrowUp"){
        rotate()
    }
    if(event.key === "ArrowLeft"){
       moveLeft()
    }
    if(event.key === "ArrowRight"){
        moveRight()
    }
    if(event.key === "ArrowDown"){
        moveDown()
    }
    if(event.key === " "){

    }
})
 setInterval(drop, 800)
