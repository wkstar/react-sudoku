const GRID_SIZE = 9;
const VALID_ANSWERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const BOX_LENGTH = 3;

export default class SudukoCell {
  constructor(index) {
    this.index = index;
    this.coords = this.getCoords(index);
    this.reset();
  }

  initialise(allCells) {
    const neighboursIndexes = this.getNeighboursIndexes();
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

  getNextValidSolution() {
    // todo - don't mutate
    return this.validSolutions.pop();
  }

  calculateValidSolutions() {
    if (this.validSolutions === null) {
      const neighbourSolutions = this.getNeighbourSolutions();
      this.validSolutions = VALID_ANSWERS.filter(answer =>
        neighbourSolutions.includes(answer)
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
    const neighbourIndexes = this.translateCoordsToIndex([
      ...boxCellCoords,
      ...rowCellCoords,
      ...columnCellCoords
    ]);
    const uniqueNeighbourIndexes = new Set(neighbourIndexes);

    // Remove current cell from neighbours
    uniqueNeighbourIndexes.delete(this.index);

    return uniqueNeighbourIndexes;
  }

  getBoxCellCoords() {
    const firstCellInBoxCoords = {
      x: Math.floor(this.coords.x / BOX_LENGTH) * BOX_LENGTH,
      y: Math.floor(this.coords.y / BOX_LENGTH) * BOX_LENGTH
    };
    let boxCellCoords = [];
    for (let xDifference = 0; i < BOX_LENGTH; i++) {
      for (let yDifference = 0; j < BOX_LENGTH; j++) {
        const neighbourX = firstCellInBoxCoords.x + xDifference;
        const neighbourY = firstCellInBoxCoords.y + yDifference;
        boxCellCoords.push({ x: neighbourX, y: neighbourY }); // todo - mutation
      }
    }
    return boxCellCoords;
  }

  getColumnCellCoords() {
    let columnCellCoords = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      // todo - mutate
      columnCellCoords.push({
        x,
        y: this.coords.y
      });
    }
    return columnCellCoords;
  }

  getRowCellCoords() {
    let rowCellCoords = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      // todo - mutate
      rowCellCoords.push({
        x: this.coords.x,
        y
      });
    }
    return rowCellCoords;
  }

  getCoords() {
    return {
      x: Math.floor(this.index / GRID_SIZE),
      y: this.index % GRID_SIZE
    };
  }
}
