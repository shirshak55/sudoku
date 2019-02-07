import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sudoku from './Sudoku';
import {
    updateCell,
    clearBoardErrors,
    solveBoard,
    resetBoard,
    resetSolution,
    generateBoard
} from './redux/board-reducer';

const mapStateToProps = ({ sudokuBoard }) => {
    return { sudokuBoard };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateCell,
            clearBoardErrors,
            solveBoard,
            resetBoard,
            resetSolution,
            generateBoard
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sudoku);
