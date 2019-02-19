import SudokuCell from './SudokuCell';

const GRID_DIMENSION = 9;
const GRID_CELLS = GRID_DIMENSION ** 2;

export default class SudukoGrid {
  constructor() {
    this.callCount = 0;
    this.resetGrid();
  }

  resetGrid() {
    this.cells = [...Array(GRID_CELLS)].map((foo, i) => {
      return new SudokuCell(i);
    });
    this.cells.forEach(cell => cell.initialise(this.cells));
    this.createSolution(0);
  }

  createSolution(cellIndex) {
    this.callCount++;
    //console.log({ callCount: this.callCount });
    if (this.callCount > 200) {
      return false;
    }
    // debugger;
    if (cellIndex === this.cells.length) {
      return true;
    }
    const currentCell = this.cells[cellIndex];
    currentCell.calculateValidSolutions();
    const validSolution = currentCell.getNextValidSolution();
    //console.log({ validSolution });
    // Could be undefined
    if (validSolution) {
      currentCell.setSolution(validSolution);
      console.log(
        `Moving up - ${cellIndex}   ${currentCell.getSolution()}   ${
          currentCell.validSolutions
        }  ${currentCell.getNeighbourIndexes()}`
      );
      if (this.createSolution(cellIndex + 1)) {
        console.log(`WOOT`);
        return true;
      } else {
        console.log(`Another go - ${cellIndex}`);
        return this.createSolution(cellIndex);
      }
    } else {
      console.log('RESET');
      currentCell.reset();
      return false;
    }
  }
}
