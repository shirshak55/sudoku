import React, { Component } from 'react'

export default class SudokuBoardView extends Component {
    render() {
        document.title = 'Sudoku Puzzle in Artificial Intelligence'
        return (
            <div className={'sudoku-board'}>
                <div className={'buttons-container'}>
                    {this.renderSolveClearButton()}
                    {this.renderGenerateResetButton()}
                </div>
                {this.renderSudokuBoard()}
            </div>
        )
    }

    renderSudokuBoard = () => {
        const board = this.props.sudokuBoard.board
        let cellCount = 0
        return (
            <table id='grid'>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={`row-${Math.floor(cellCount / 9)}`}>
                            {row.map((cell, colIndex) => (
                                <td key={`column-${cellCount % 9}`}>
                                    <input
                                        id={`cell-${cellCount++}`}
                                        type='tel'
                                        value={this.getCellValue(rowIndex, colIndex)}
                                        onChange={event => this.handleCellInput(event, rowIndex, colIndex)}
                                        className={this.getCellStyling(rowIndex, colIndex)}
                                        disabled={this.props.sudokuBoard.isSolved}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    renderSolveClearButton = () => {
        return this.props.sudokuBoard.isSolved ? (
            <button className={'button'} onClick={this.props.resetSolution}>
                <span>Clear</span>
            </button>
        ) : (
            <button className={'button'} onClick={this.props.solveBoard} disabled={!this.props.sudokuBoard.isValid}>
                <span>Solve</span>
            </button>
        )
    }

    renderGenerateResetButton = () => {
        return this.props.sudokuBoard.isEmpty ? (
            <button className={'button'} onClick={this.props.generateBoard}>
                <span>Generate</span>
            </button>
        ) : (
            <button className={'button'} onClick={this.props.resetBoard}>
                <span>Reset</span>
            </button>
        )
    }

    getCellValue = (row, col) => {
        const board = this.props.sudokuBoard.board
        const value = board[row][col]
        return value === 0 ? '' : value
    }

    getCellStyling = (row, col) => {
        const board = this.props.sudokuBoard.board
        if (this.props.sudokuBoard.solvedCells[row][col] && this.props.sudokuBoard.isSolved) {
            return 'solved-cell'
        }
        if (this.props.sudokuBoard.errorCells[row][col]) {
            return 'invalid-cell'
        }
        if (board[row][col] === 0) {
            return null
        }
        return 'valid-cell'
    }

    handleCellInput = (event, row, col) => {
        let value = event.target.value[event.target.value.length - 1]
        this.props.updateCell(row, col, value)
        if (!value) {
            return this.props.clearBoardErrors()
        }
        setTimeout(() => this.props.clearBoardErrors(), 250)
    }
}
