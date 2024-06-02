var board = document.getElementById("board");
var cells = [];
for (var i = 0; i < 9; i++) {
    var cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i.toString();
    cell.addEventListener("click", handleCellClick);
    cells.push(cell);
}
cells.forEach(function (cell) { return board === null || board === void 0 ? void 0 : board.appendChild(cell); });
var currentPlayer = "X";
var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
var boardState = [];
for (var i = 0; i < 9; i++) {
    boardState.push("");
}
function handleCellClick(event) {
    var _a;
    var cellIndex = Number((_a = event.target) === null || _a === void 0 ? void 0 : _a.dataset.index);
    if (!isNaN(cellIndex) && boardState[cellIndex] === "" && !checkWinner()) {
        boardState[cellIndex] = currentPlayer;
        if (event.target)
            event.target.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
function checkWinner() {
    for (var _i = 0, winningCombos_1 = winningCombos; _i < winningCombos_1.length; _i++) {
        var combo = winningCombos_1[_i];
        var a = combo[0], b = combo[1], c = combo[2];
        if (boardState[a] &&
            boardState[a] === boardState[b] &&
            boardState[a] === boardState[c]) {
            alert("Player ".concat(boardState[a], " wins!"));
            return true;
        }
    }
    return false;
}
