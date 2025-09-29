// Only 1 Game board there for each game,
// There are 2 players, should have properties such as score
// There could be multiple games 

const GameBoard = (function () {
    // INITIALIZE the game board 
    let gameBoard = [];

    function isValidIndex(row, col) {
        const isValid = (row >= 0 && row < gameBoard.length) && (col >= 0 && col < gameBoard.length);
        return isValid;
    }

    function isEmptySpace(row, col) {
        const isEmpty = gameBoard[row][col] === '';
        return isEmpty;
    }
    // A terminal function to tell if the game is ended on this board
    // RETURN which side has won, or tie.
    function getGameStatus() {
        if (!isEmptySpace(0,0) && (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2])) {
            console.log(`Player ${gameBoard[0][0]} has won diagonally.`);
            return gameBoard[0][0];    
        }
        else if (!isEmptySpace(2, 0) && (gameBoard[2][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[0][2])) {
            console.log(`Player ${gameBoard[2][0]} has won diagonally.`);
            return gameBoard[2][0];
        }

        for (let i = 0; i < gameBoard.length; i++) {
            if (!isEmptySpace(i, 0) && (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2])) {
                console.log(`Player ${gameBoard[i][0]} has won horizontally.`);
                return gameBoard[i][0];
            }
            else if (!isEmptySpace(0, i) && (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i])) {
                console.log(`Player ${gameBoard[0][i]} has won vertically.`);
                return gameBoard[0][i];
            }
        }

        for (let i = 0; i < gameBoard.length; i++) {
            for (let j = 0; j < gameBoard.length; j++) {
                if (isEmptySpace(i, j))
                    return "In Progress";
            }
        }
        return "Draw";
    }

    function initializeBoardState() {
        gameBoard = [];
        for (let i = 0; i < 3; i++) {
            gameBoard[i] = [];
            for (let j = 0; j < 3; j++) {
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
            return true;
        }
        return false;
    }

    function getBoard() {
        return gameBoard;
    }
    return { move, initializeBoardState, displayBoardState, getGameStatus, getBoard };
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

const DisplayController = function() {
    const board = GameBoard.getBoard();
}

const td = document.querySelector("td");
console.log(td.dataset.col);
console.log(td.dataset.row);


