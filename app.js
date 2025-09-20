// Only 1 Game board there for each game,
// There are 2 players, should have properties such as score
// There could be multiple games 

const GameBoard = (function () {
    // INITIALIZE the game board 
    let gameBoard = [];

    // A terminal function to tell if the game is ended on this board
    // RETURN which side has won, or tie.

    function initializeBoardState(row, col) {
        gameBoard = [];
        for (let i = 0; i < row; i++) {
            gameBoard[i] = [];
            for (let j = 0; j < col; j++) {
                gameBoard[i][j] = '';
            }
        }
    }

    function displayBoardState() {
        console.log(gameBoard);
    }

    function move(row, col, side) {
        function isValidMove(row, col) {
            const isNum = typeof row === "number" && typeof col === "number";
            const validIndex = (row >= 0 && row < gameBoard.length) && (col >= 0 && col < gameBoard.length)
            if (isNum && validIndex) {
                const isEmpty = gameBoard[row][col] === '';
                if (isEmpty) {
                    console.log("This is a valid move.");
                    return true;
                }
            }
            console.log("This is not a valid move!");
            return false;
        }

        if (isValidMove(row, col)) {
            gameBoard[row][col] = side
        }
    }

    return { move, initializeBoardState, displayBoardState };
}) ()

const createPlayer = function () {
    let score = 0;
    let side;

    function setSide(playerSide) {
        side = playerSide;
    }

    function getSide() {
        return side;
    }

    function increment() {
        score++;
    }
    return { increment, setSide, getSide };
}

console.log(GameBoard);