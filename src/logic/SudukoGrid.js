import SudokuCell from './SudokuCell';
import { flipCoin } from '../helpers/random';

const CALL_COUNT_MAX = 1000;
const GRID_DIMENSION = 9;
const GRID_CELLS = GRID_DIMENSION ** 2;

export default class SudukoGrid {
  constructor() {
    this.callCount = 0;
    this.resetGrid();
  }

  resetGrid() {
    this.cells = [...Array(GRID_CELLS)].map((foo, i) => {
      return new SudokuCell(i, flipCoin());
    });
    this.cells.forEach(cell => cell.initialise(this.cells));
    this.createSolution(0);
  }

  createSolution(cellIndex) {
    this.callCount++;

    // Infinite loops are bad
    if (this.callCount > CALL_COUNT_MAX) {
      throw new Error('Call count maximum exceeded');
    }

    if (cellIndex === this.cells.length) {
      return true;
    }

    const currentCell = this.cells[cellIndex];
    currentCell.calculateValidSolutions();
    const validSolution = currentCell.getNextValidSolution();

    if (validSolution) {
      currentCell.setSolution(validSolution);

      if (this.createSolution(cellIndex + 1)) {
        return true;
      } else {
        return this.createSolution(cellIndex);
      }
    } else {
      currentCell.reset();
      return false;
    }
  }
}
