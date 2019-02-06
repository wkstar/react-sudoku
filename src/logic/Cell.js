const GRID_SIZE = 9;
const VALID_ANSWERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class SudukoCell {
  constructor(index) {
    this.solution = null;
    this.index = index;
    this.coords = this.getCoords(index);
    this.neighbours = this.getNeighbours();
  }

  getSolution() {
    return this.solution;
  }

  isValidSolution(proposeSolution) {
    const neighbourSolutions = this.getNeighbourSolutions();
    return neighbourSolutions.contains(proposedSolution);
  }

  getNeighbourSolutions() {
    return this.neighbours.map(neighbour => {
      return neighbour.getSolution();
    });
  }

  getNeighbours() {
    const boxNeighbours = getBoxNeighbours();
    const rowNeighbours = getRowNeighbours();
    const columnNeighbours = getColumnNeighbours();
    return unique(boxNeighbours + rowNeighbours + columnNeighbours);
  }

  getCoords(index) {}
}
