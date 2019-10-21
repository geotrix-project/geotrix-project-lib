import nerdamer = require('nerdamer');
import { Resolution } from './resolution';

const Matrix = nerdamer.getCore().Matrix;
const _ = nerdamer.getCore().PARSER;

export class Determinant {

  private matrix: any;

  constructor(matrix: string[][]) {
    this.matrix = new Matrix();

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        this.matrix.set(row, col, matrix[row][col]);
      }
    }
  }

  public sarrus(): Resolution {
    const resolution = new Resolution();

    if (!this.matrix.isSquare()) {
      resolution.setError('Matrix must be square');

    } else if (this.matrix.rows() === 1) {
      resolution.addStep('Sarrus method', '\begin{vmatrix} a_{1,1} \end{vmatrix} = a_{1,1}');
      resolution.addStep('Applying method', this.matrix.latex() + ' = ' + this.matrix.get(0, 0));

    } else {
      resolution.setError('Matrix dimensions must be less than or equal to 3');
    }

    return resolution;
  }
}
