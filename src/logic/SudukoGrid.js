const GRID_SIZE = 9;
const VALID_ANSWERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class SudukoGrid {
  constructor() {
    this.resetGrid();
    this.createValidGrid();
  }

  resetGrid() {
    this.rows = [[], [], [], [], [], [], [], [], []];
    this.columns = [[], [], [], [], [], [], [], [], []];
    this.boxes = [[], [], [], [], [], [], [], [], []];
  }

  getCurrentBoxIndex(column, row) {
    const start = [0, 1, 2];
    const middle = [3, 4, 5];
    const end = [6, 7, 8];

    switch (true) {
      case start.includes(column) && start.includes(row):
        return 0;
      case middle.includes(column) && start.includes(row):
        return 1;
      case end.includes(column) && start.includes(row):
        return 2;
      case start.includes(column) && middle.includes(row):
        return 3;
      case middle.includes(column) && middle.includes(row):
        return 4;
      case end.includes(column) && middle.includes(row):
        return 5;
      case start.includes(column) && end.includes(row):
        return 6;
      case middle.includes(column) && end.includes(row):
        return 7;
      case end.includes(column) && end.includes(row):
        return 8;
      default:
        throw new Error('Unknown Box');
    }
  }
  createValidGrid() {
    for (
      let rowIndex = 0, rowAttempt = 0;
      rowIndex < GRID_SIZE && rowAttempt < 10;
      rowIndex++
    ) {
      for (let columnIndex = 0; columnIndex < GRID_SIZE; columnIndex++) {
        const currentRow = this.rows[rowIndex];
        const currentColumn = this.columns[columnIndex];
        const currentBoxIndex = this.getCurrentBoxIndex(columnIndex, rowIndex);
        const currentBox = this.boxes[currentBoxIndex];
        let limit = 0;
        console.log(`Col${columnIndex} Row${rowIndex}`);
        const solutionGenerator = new RandomSolutionGenerator();
        while (limit < 12) {
          limit++;

          let testSolution;
          try {
            testSolution = solutionGenerator.getRandomSolution();

            console.log({ testSolution });
            if (
              !(
                currentRow.includes(testSolution) ||
                currentBox.includes(testSolution) ||
                currentColumn.includes(testSolution)
              )
            ) {
              this.rows[rowIndex] = [...currentRow, testSolution];
              this.columns[columnIndex] = [...currentColumn, testSolution];
              this.boxes[currentBoxIndex] = [...currentBox, testSolution];
              console.log('FOUND', {
                r: this.rows,
                c: this.columns,
                b: this.boxes
              });
              break;
            }
          } catch (e) {
            console.error(e);
            rowAttempt++;
            rowIndex--;
            break;
          }
        }
        console.log('END');
      }
    }
  }
}

class RandomSolutionGenerator {
  constructor() {
    this.possibleSolutions = [...VALID_ANSWERS];
    this.callCount = 0;
  }

  getRandomSolution() {
    this.callCount++;
    console.log(`CallCount ${this.callCount}`);
    if (this.possibleSolutions.length === 0) {
      throw new Error('No more solutions possible');
    }
    const randomIndex = Math.floor(
      Math.random() * this.possibleSolutions.length
    );
    console.log({ possibleSolutions: this.possibleSolutions, randomIndex });
    const randomSolution = this.possibleSolutions[randomIndex];
    const newPossibleSolutions = this.possibleSolutions.filter(el => {
      return el !== randomSolution;
    });
    console.log({ newPossibleSolutions });
    this.possibleSolutions = newPossibleSolutions;
    return randomSolution;
  }
}
