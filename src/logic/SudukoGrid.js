import SudokuCell from './SudokuCell';

const GRID_DIMENSION = 9;
const GRID_CELLS = GRID_DIMENSION ** 2;

export default class SudukoGrid {
  constructor() {
    this.resetGrid();
  }

  resetGrid() {
    this.cells = [...Array(GRID_CELLS)].map((foo, i) => new SudokuCell(i));
    this.cells.forEach(cell => cell.initialise(this.cells));
    this.createSolution(0);
  }

  createSolution(cellIndex) {
    if (cellIndex === this.cells.length) {
      return true;
    }
    const currentCell = this.cells[cellIndex];
    currentCell.calculateValidSolutions();
    const validSolution = currentCell.getNextValidSolution();

    // Could be undefined
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
