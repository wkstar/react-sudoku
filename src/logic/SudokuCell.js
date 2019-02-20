import { shuffle } from '../helpers/random';

const GRID_SIZE = 9;
const VALID_ANSWERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const BOX_LENGTH = 3;

export default class SudukoCell {
  constructor(index, revealed) {
    this.index = index;
    this.revealed = revealed;
    this.coords = this.getCoords(index);
    this.reset();
  }

  initialise(allCells) {
    const neighboursIndexes = this.getNeighbourIndexes();
    this.neighbours = neighboursIndexes.map(cellIndex => allCells[cellIndex]);
  }

  reset() {
    this.solution = null;
    this.validSolutions = null;
  }

  getSolution() {
    return this.solution;
  }

  setSolution(newSolution) {
    this.solution = newSolution;
  }

  getRevealed() {
    return this.revealed;
  }

  getNextValidSolution() {
    const [validSolution, ...remainingSolutions] = this.validSolutions;
    this.validSolutions = remainingSolutions;
    return validSolution;
  }

  calculateValidSolutions() {
    if (this.validSolutions === null) {
      const neighbourSolutions = this.getNeighbourSolutions();
      this.validSolutions = shuffle(
        VALID_ANSWERS.filter(answer => !neighbourSolutions.includes(answer))
      );
    }
  }

  getNeighbourSolutions() {
    return this.neighbours.map(neighbour => {
      return neighbour.getSolution();
    });
  }

  translateCoordsToIndex(coords) {
    const { x, y } = coords;

    return y * GRID_SIZE + x;
  }

  getNeighbourIndexes() {
    const boxCellCoords = this.getBoxCellCoords();
    const rowCellCoords = this.getRowCellCoords();
    const columnCellCoords = this.getColumnCellCoords();
    const neighbourCoords = [
      ...boxCellCoords,
      ...rowCellCoords,
      ...columnCellCoords
    ];
    const neighbourIndexes = neighbourCoords.map(this.translateCoordsToIndex);
    const uniqueNeighbourIndexes = new Set(neighbourIndexes);

    // Remove current cell from neighbours
    uniqueNeighbourIndexes.delete(this.index);

    return [...uniqueNeighbourIndexes];
  }

  getBoxCellCoords() {
    const firstCellInBoxCoords = {
      x: Math.floor(this.coords.x / BOX_LENGTH) * BOX_LENGTH,
      y: Math.floor(this.coords.y / BOX_LENGTH) * BOX_LENGTH
    };
    let boxCellCoords = [];
    for (let yDifference = 0; yDifference < BOX_LENGTH; yDifference++) {
      for (let xDifference = 0; xDifference < BOX_LENGTH; xDifference++) {
        const neighbourX = firstCellInBoxCoords.x + xDifference;
        const neighbourY = firstCellInBoxCoords.y + yDifference;
        boxCellCoords = [...boxCellCoords, { x: neighbourX, y: neighbourY }];
      }
    }
    return boxCellCoords;
  }

  getRowCellCoords() {
    let columnCellCoords = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      columnCellCoords = [
        ...columnCellCoords,
        {
          x,
          y: this.coords.y
        }
      ];
    }
    return columnCellCoords;
  }

  getColumnCellCoords() {
    let rowCellCoords = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      rowCellCoords = [
        ...rowCellCoords,
        {
          x: this.coords.x,
          y
        }
      ];
    }
    return rowCellCoords;
  }

  getCoords() {
    return {
      x: this.index % GRID_SIZE,
      y: Math.floor(this.index / GRID_SIZE)
    };
  }
}
