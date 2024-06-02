const board: any = document.getElementById("board");
const cells = [];

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i.toString();
  cell.addEventListener("click", handleCellClick);
  cells.push(cell);
}

cells.forEach((cell) => board?.appendChild(cell));

let currentPlayer: "X" | "O" = "X";
const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const boardState: string[] = [];
for (let i = 0; i < 9; i++) {
  boardState.push("");
}

function handleCellClick(event: MouseEvent) {
  const cellIndex: number = Number(
    (event.target as HTMLElement)?.dataset.index
  );

  if (!isNaN(cellIndex) && boardState[cellIndex] === "" && !checkWinner()) {
    let color = currentPlayer === "X" ? "red" : "orange";
    boardState[cellIndex] = currentPlayer;
    if (event.target) {
      (event.target as HTMLElement).textContent = currentPlayer;
      (event.target as HTMLElement).style.color = color;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner(): boolean {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      alert(`Jogador ${boardState[a]} ganhou!`);
      return true;
    }
  }
  return false;
}
