// Only 1 Game board there for each game,
// There are 2 players, should have properties such as score
// There could be multiple games 

const GameBoard = (function () {
    // INITIALIZE the game board 
    let gameBoard = [];

    function isValidIndex(row, col) {
        const isValid = (row >= 0 && row < gameBoard.length) && (col >= 0 && col < gameBoard.length)
        return isValid;
    }

    function isEmptySpace(row, col) {
        const isEmpty = gameBoard[row][col] === '';
        return isEmpty;
    }
    // A terminal function to tell if the game is ended on this board
    // RETURN which side has won, or tie.
    function getGameStatus() {
        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard.length; j++) {
                // win condition as a horizontal line (row)
                if (!isEmptySpace(i, j)) {
                    if (isValidIndex(i, j + 1) && isValidIndex(i, j + 2)) {
                        console.log(i, j);
                        console.log(i, j + 1);
                        console.log(i, j + 2);
                        console.log(gameBoard[i][j] === gameBoard[i][j + 1] === gameBoard[i][j + 2]);
                        if (gameBoard[i][j] === gameBoard[i][j + 1] && gameBoard[i][j + 1] === gameBoard[i][j + 2]) {
                            console.log(`player has won!`);
                            return gameBoard[i][j]; // return the won side
                        }
                    }
                }
            }
            
            // return something to indicate the game should continue
        }
    }

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
            // const isValidIndex = (row >= 0 && row < gameBoard.length) && (col >= 0 && col < gameBoard.length)
            if (isNum && isValidIndex(row, col)) {
                if (isEmptySpace(row, col)) {
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

    return { move, initializeBoardState, displayBoardState, getGameStatus };
})()

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