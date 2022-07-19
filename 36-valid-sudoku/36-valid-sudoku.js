/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = {};
    const cols = {};
    const squares = {};
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board.length; c++) {
            let num = board[r][c];
            if (num === '.') continue;
            
            const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`
            
            if (!cols[c]) cols[c] = {};
            if (!rows[r]) rows[r] = {};
            if (!squares[grid]) squares[grid] = {};
            
            if (rows[r][num] || cols[c][num] || squares[grid][num]) return false;
            
            rows[r][num] = 1;
            cols[c][num] = 1;
            squares[grid][num] = 1;
        }
    }
    
    return true;
};

/*
in:
    - (array) - array of subarrays. Each Subarray contains numbers of string data type.
out:
    - (boolean) - true if the puzzle is valid, false otherwise
cons:
    - check leetcode for constraints
edge:
    - 
*/

/*

declare rows with object
declare columns with object
declare squares with object

traverse over each row in board
    traverse over each column in board
        create num being the current number in board
        
        if num is . then move on to next loop iteration
        
        create grid that lets us know what subbox the num is in
        
        if columns c does not contain a value
            initialize columns at c with an empty object
            
        if rows at r does not contain a value
            initialize rows at r with an empty object
            
        if squares at grid does not contain a value
            initialize squares at grid with an empty object
            
        if row at r already contains num, or if column at c already contains num, or if squares at grid already contains num
            return false
            
        add num to rows at r with a value of 1
        add num to cols at c with a value of 1
        add grid to squares at grid with a value of 1
        
return true       
*/