const board = document.getElementById("board");
const cells = Array.from({ length: 9 }, (_, index) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = index.toString();
  cell.addEventListener("click", handleCellClick);
  return cell;
});

cells.forEach((cell) => board?.appendChild(cell));

let currentPlayer = "X";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const boardState = Array(9).fill("");

function handleCellClick(event) {
  const cellIndex = event.target.dataset.index;
  if (boardState[cellIndex] === "" && !checkWinner()) {
    boardState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      alert(`Player ${boardState[a]} wins!`);
      return true;
    }
  }
  return false;
}
