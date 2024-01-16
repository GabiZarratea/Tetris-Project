import './style.css'

const canvas = document.querySelector('.gameCanvas')
const nextPieceCanvas = document.querySelector('.nextPieceCanvas');
const $record = document.querySelector('.record');
const $restartButton = document.querySelector('.message-container button');


const nextPieceContext = nextPieceCanvas.getContext('2d');
const NEXT_PIECE_SIZE = 80;

const context = canvas.getContext('2d')
const $score = document.getElementById('score');
const $lines = document.getElementById('lines');

const BLOCK_SIZE = 20
const BOARD_WIDTH = 16
const BOARD_HEIGHT = 35

let score = 0;
let lines = 0;

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)


const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const pieces = [
    [
        [1, 1],
        [1, 1]
    ],
    [
        [1],
        [1],
        [1],
        [1]
    ],
    [
        [1, 1, 1]
    ],
    [
        [1, 1],
        [1, 0],
        [1, 0]
    ],
    [
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [1, 0],
        [1, 0],
        [1, 1]
    ],
    [
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 1],
        [1, 1, 0]
    ]
]

let dropCounter = 0
let lastTime = 0

let gameOver = false;

document.addEventListener('DOMContentLoaded', function() {
    const storedRecord = JSON.parse(localStorage.getItem('tetrisRecord'));
    $record.innerText = `${storedRecord?.score || 0}`;
});

$restartButton.addEventListener('click', () => {

    score = 0;
    lines = 0;
    gameOver = false;

    board.forEach(row => row.fill(0));
    piece = inicializarNuevaPieza();

    document.querySelector('.message-container').style.display = 'none';

    $score.innerText = score;

    update();
});

function update(time = 0){

    $score.innerText = score;
    $lines.innerText = lines;
    
    
    if (gameOver) {
        const messageContainer = document.querySelector('.message-container');
        const storedRecord = JSON.parse(localStorage.getItem('tetrisRecord'));
    
        if (!storedRecord || score > storedRecord.score) {
            saveRecordLocal();
        }
    
        $record.innerText = `${storedRecord.score || 0}`;
        
        document.querySelector('.message-container').style.display = 'block';
        
        return;
    }
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;

    if (dropCounter > 1000) {
        piece.position.y++;
        dropCounter = 0;

        if (checkCollision()) {
            piece.position.y--;
            solidifyPiece();
            removeRows();
            cambiarPieza();
        }
    }

    const storedRecord = saveRecordLocal();
    $record.innerText = `${storedRecord.score || 0}`;

    draw();
    window.requestAnimationFrame(update);
}

const colors = ['BF2F2F', 'F9E117', '70F917', '1AC3EC', '003AFF', '5D29FF', 'DC00FF', '08390D']
let pieceColor = '#' + colors[Math.floor(Math.random() * colors.length)];

function inicializarNuevaPieza() {

    return {
        position: { x: Math.floor(BOARD_WIDTH / 2 - 2), y: 0 },
        shape: pieces[Math.floor(Math.random() * pieces.length)],
        color: '#' + colors[Math.floor(Math.random() * colors.length)]
    };
}

let piece = inicializarNuevaPieza();

function draw(){

    context.fillStyle = '#000000'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.lineWidth = 0.1;

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value == 1) {
                context.fillStyle = pieceColor
                context.fillRect(x, y, 1, 1).
                context.strokeStyle = '#000000';
                context.strokeRect(x, y, 1, 1);
            } 
            else if (value && typeof value === 'object' && value.color) {
                context.fillStyle = value.color;
                context.fillRect(x, y, 1, 1);
                context.strokeStyle = '#000000';
                context.strokeRect(x, y, 1, 1);
            }
        })
    })

    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value == 1) {
                context.fillStyle = pieceColor
                context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
                context.strokeStyle = '#000000';
                context.strokeRect(x + piece.position.x, y + piece.position.y, 1, 1);
            }
        });
    });
}
function cambiarPieza() {
    piece = inicializarNuevaPieza();
    pieceColor = '#' + colors[Math.floor(Math.random() * colors.length)];
    score += 10;
    $score.innerText = score;
    $lines.innerText = lines;
    removeRows(); 

    nextPieceContext.clearRect(0, 0, NEXT_PIECE_SIZE, NEXT_PIECE_SIZE);
    const nextPiece = pieces[Math.floor(Math.random() * pieces.length)];
    dibujarPieza(piece.shape, nextPieceContext, NEXT_PIECE_SIZE);
}

function dibujarPieza(piece, context, size) {
    const blockSize = size / Math.max(piece.length, piece[0].length);

    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value == 1) {
                context.fillStyle = pieceColor;
                context.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                context.strokeStyle = '#000000';
                context.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
            }
        });
    });
}

document.addEventListener('keydown', event => {
    if(event.key == 'ArrowLeft') {
        piece.position.x--
        if (checkCollision()){
            piece.position.x++
        }
    }
    if(event.key == 'ArrowRight'){
        piece.position.x++
        if (checkCollision()){
            piece.position.x--
        }
    } 
    if(event.key == 'ArrowDown'){
        piece.position.y++
        if (checkCollision()){
            piece.position.y--
            solidifyPiece()
            removeRows()
            cambiarPieza()
        }
    }  
    if(event.key == 'ArrowUp'){
        const rotated = []
    
        for (let i = 0; i < piece.shape[0].length; i++){
            const row = []

            for(let a = piece.shape.length - 1; a >= 0; a--){
                row.push(piece.shape[a][i])
            }

            rotated.push(row)
        }

        const previousShape = piece.shape
        piece.shape = rotated
        if(checkCollision()){
            piece.shape = previousShape
        }
    }
})

function checkCollision () {
    return piece.shape.find((row, y) => {
        return row.find((value, x) => {
            return (
                value !== 0 &&
                board[y + piece.position.y]?.[x + piece.position.x] !== 0
            )
        })
    })
}

function solidifyPiece(){
    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value == 1){
                board[y + piece.position.y][x + piece.position.x] = { color: piece.color };
            }
        })
    })

    piece.position.x = Math.floor(BOARD_WIDTH / 2 - 2)
    piece.position.y = 0

    piece.shape = pieces[Math.floor(Math.random() * pieces.length)]

    if(checkCollision()){
        gameOver = true;
        board.forEach((row) => row.fill(0))
    }
}

function removeRows() {
    const rowsToRemove = [];

    board.forEach((row, y) => {
        if (row.every(value => value !== 0 && typeof value === 'object')) {
            rowsToRemove.push(y);
        }
    });

    rowsToRemove.forEach(y => {
        board.splice(y, 1);
        const newRow = Array(BOARD_WIDTH).fill(0);
        board.unshift(newRow);
        score += 100;
        lines += 1;
    });
}

function saveRecordLocal() {
    const storedRecord = JSON.parse(localStorage.getItem('tetrisRecord')) || { score: 0 };

    if (score > storedRecord.score) {
        const record = { score };
        return record;
    }

    return storedRecord;
}



update()