export const transpose = matrix => matrix[0].map((col, index) => matrix.map(row => row[index]));

export const validateCell =  (row, col, board) => validateCellValue(row, col, board) && validateCellInRow(row, col, board) && validateCellInColumn(row, col, board) && validateCellInSector(row, col, board)

export const isEmpty = errorCells =>  !errorCells.filter(row => row.filter(cell => cell).length >= 1).length >= 1;

export const validateCellValue = (row, col, board) => board[row][col] >= 1 && board[row][col] <= 9 && Number.isInteger(board[row][col]);

export const validateCellInRow = (row, col, board)  => board[row].filter(element => element === board[row][col]).length <= 1;

export const validateCellInColumn = (row, col, board)  => validateCellInRow(col, row, transpose(board));

export const  validateBoard = (board) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== 0 && !validateCell(row, col, board)) {
                return false;
            }
        }
    }
    return true;
}

export const  validateCellInSector = (row, col, board) => {
    let rowBase = Math.floor(row / 3) * 3;
    let colBase = Math.floor(col / 3) * 3;

    for (let r = rowBase; r < rowBase + 3; r++) {
        for (let c = colBase; c < colBase + 3; c++) {
            if (r !== row && c !== col && board[r][c] === board[row][col]) {
                return false;
            }
        }
    }
    return true;
}
