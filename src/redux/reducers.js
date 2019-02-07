import { combineReducers } from 'redux';

import SudokuBoardReducer from './board-reducer';

const rootReducer = combineReducers({
    sudokuBoard: SudokuBoardReducer
});

export default rootReducer;
