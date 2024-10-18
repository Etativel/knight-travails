import { knightMoves } from "./js/gameboard.js";
import "./styles/style.css";

let startPosition = [0, 0];
document.addEventListener("DOMContentLoaded", () => {
  createChessBoard();
  attachListener();
});

const testBtn = document.querySelector(".test-btn");
testBtn.addEventListener("click", () => {
  let path = knightMoves([3, 3], [7, 7]);
  console.log(path);
});

const boardContainer = document.querySelector(".board-container");

function createChessBoard() {
  const boardSize = 8;

  boardContainer.style.display = "grid";
  boardContainer.style.gridTemplateColumns = `repeat(${boardSize}, 80px)`;
  boardContainer.style.gridTemplateRows = `repeat(${boardSize}, 80px)`;
  boardContainer.style.gap = "0";

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const square = document.createElement("div");
      square.classList.add(`square-${row}-${col}`);
      square.classList.add("chess-square");
      square.style.width = "80px";
      square.style.height = "80px";

      if ((row + col) % 2 === 0) {
        square.style.backgroundColor = "#eeeed2";
      } else {
        square.style.backgroundColor = "#769656";
      }

      boardContainer.appendChild(square);
    }
  }
}

function attachListener() {
  const squares = boardContainer.querySelectorAll(".chess-square");
  console.log(squares);
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      const className = square.classList[0];
      const row = parseInt(className.split("-")[1]);
      const col = parseInt(className.split("-")[2]);
      console.log([row, col]);
      let path = knightMoves(startPosition, [row, col]);
      console.log(path);
      startPosition = [row, col];
      attachIcon();
    });
  });
}

function attachIcon() {
  const currentPositionClass = `square-${startPosition[0]}-${startPosition[1]}`;
  const knightPosition = document.querySelector(`.${currentPositionClass}`);
  console.log(knightPosition);

  document.querySelectorAll(".knight").forEach((knight) => knight.remove());
  if (knightPosition) {
    const knightIcon = document.createElement("div");
    knightIcon.classList.add("knight");
    knightIcon.textContent = "♞";
    knightPosition.appendChild(knightIcon);
  }
}
