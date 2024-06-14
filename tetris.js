const shapes = [
  [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1],
    [1, 1],
  ],
];
const colors = [
  "#590d22",
  "#fff0f3",
  "#ffccd5",
  "#ff8fa3",
  "#ff758f",
  "#ff4d6d",
  "#c9184a",
//   "#a4133c",
];
const rows = 20;
const cols = 10;

let canvas = document.querySelector("#tetris_canvas");
let ctx = canvas.getContext("2d");
ctx.scale(30, 30);

let pieceObj = generateRandomPiece();
function generateRandomPiece() {
  let ran = Math.floor(Math.random() * 7);
  let ran1 = Math.floor(Math.random() * 6);
  let pieceShape = shapes[ran];
  let colorIndex = ran1 + 1;
  let x = 4;
  let y = 0;
  return {pieceShape,colorIndex,x,y};
}
renderPiece();
function renderPiece(){
    let piece = pieceObj.pieceShape;
    for(let i = 0; i<piece.length; i++){
        for(let j =0; j<piece[i].length; j++){
            if(piece[i][j] == 1){
                ctx.fillStyle = colors[pieceObj.colorIndex];
                ctx.fillRect(j,i,1,1);
            }
        }
    }
}
