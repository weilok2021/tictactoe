const { GameBoard } = require('./app');

describe('GameBoard getGameStatus Logic', () => {
    // Automatically reset the board before every test runs
    beforeEach(() => {
        GameBoard.initializeBoardState(3, 3);
    });

    // --- Diagonal Win Checks ---

    test('should correctly identify a diagonal win (TL-BR) for X', () => {
        GameBoard.move(0, 0, 'X');
        GameBoard.move(1, 1, 'X');
        GameBoard.move(2, 2, 'X');
        expect(GameBoard.getGameStatus()).toBe('X');
    });

    test('should correctly identify a diagonal win (BL-TR) for O', () => {
        GameBoard.move(2, 0, 'O');
        GameBoard.move(1, 1, 'O');
        GameBoard.move(0, 2, 'O');
        expect(GameBoard.getGameStatus()).toBe('O');
    });
    
    // Ensure that if a winning pattern exists, we don't return 'In Progress' or 'Draw'
    test('should prioritize a win over a potential draw state', () => {
        // This is a full board, but X wins diagonally
        GameBoard.move(0, 0, 'X'); // X
        GameBoard.move(1, 1, 'X'); // X
        GameBoard.move(2, 2, 'X'); // X
        GameBoard.move(0, 1, 'O'); 
        GameBoard.move(0, 2, 'O');
        GameBoard.move(1, 0, 'O');
        GameBoard.move(1, 2, 'X');
        GameBoard.move(2, 0, 'X');
        GameBoard.move(2, 1, 'O'); // Full board, X wins
        
        expect(GameBoard.getGameStatus()).toBe('X');
    });


    // --- Horizontal Win Checks ---
    
    // Test for a win in the first row (i=0)
    test('should identify a horizontal win in row 0 for X', () => {
        GameBoard.move(0, 0, 'X');
        GameBoard.move(0, 1, 'X');
        GameBoard.move(0, 2, 'X');
        expect(GameBoard.getGameStatus()).toBe('X');
    });

    // Test for a win in the middle row (i=1)
    test('should identify a horizontal win in row 1 for O', () => {
        GameBoard.move(1, 0, 'O');
        GameBoard.move(1, 1, 'O');
        GameBoard.move(1, 2, 'O');
        expect(GameBoard.getGameStatus()).toBe('O');
    });

    // --- Vertical Win Checks ---

    // Test for a win in the first column (i=0)
    test('should identify a vertical win in column 0 for X', () => {
        GameBoard.move(0, 0, 'X');
        GameBoard.move(1, 0, 'X');
        GameBoard.move(2, 0, 'X');
        expect(GameBoard.getGameStatus()).toBe('X');
    });

    // Test for a win in the last column (i=2)
    test('should identify a vertical win in column 2 for O', () => {
        GameBoard.move(0, 2, 'O');
        GameBoard.move(1, 2, 'O');
        GameBoard.move(2, 2, 'O');
        expect(GameBoard.getGameStatus()).toBe('O');
    });

    // --- Draw and In Progress Checks ---

    // test('should return "Draw" if the board is full with no winner', () => {
    //     // The standard "cat's game" draw
    //     GameBoard.move(0, 0, 'X');
    //     GameBoard.move(0, 1, 'O');
    //     GameBoard.move(0, 2, 'X');
    //     GameBoard.move(1, 0, 'X');
    //     GameBoard.move(1, 1, 'O');
    //     GameBoard.move(1, 2, 'O');
    //     GameBoard.move(2, 0, 'O');
    //     GameBoard.move(2, 1, 'X');
    //     GameBoard.move(2, 2, 'X');
        
    //     expect(GameBoard.getGameStatus()).toBe('Draw');
    // });

    // test('should return "In Progress" if there are empty spaces and no winner', () => {
    //     // Only four moves made
    //     GameBoard.move(0, 0, 'X');
    //     GameBoard.move(0, 1, 'O');
    //     GameBoard.move(1, 1, 'X');
    //     GameBoard.move(2, 2, 'O');
        
    //     expect(GameBoard.getGameStatus()).toBe('In Progress');
    // });

    // test('should return "In Progress" on a completely empty board', () => {
    //     // board is reset in beforeEach
    //     expect(GameBoard.getGameStatus()).toBe('In Progress');
    // });
    
    // // --- Move validation check (Sanity check for test setup) ---
    
    // test('move function should prevent placing markers on occupied spaces', () => {
    //     GameBoard.move(0, 0, 'X');
    //     // Try to place O on the same spot
    //     const success = GameBoard.move(0, 0, 'O'); 
        
    //     expect(success).toBe(false); // Move should fail
    //     // Check that the cell still contains 'X'
    //     // Since we can't directly read the private state, we'll verify the game status remains 'In Progress' 
    //     // (assuming no other moves were made that would cause a win).
    //     expect(GameBoard.getGameStatus()).toBe('In Progress');
    // });
});
