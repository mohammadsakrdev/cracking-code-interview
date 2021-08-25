// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
// You must do it in place.
// https://leetcode.com/problems/set-matrix-zeroes/
// https://dev.to/alysachan830/leetcode-in-js-matrix-zeros-2jbf

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const colZero = Array(matrix[0].length);
  const rowZero = Array(matrix.length);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        colZero[row] = 0;
        rowZero[col] = 0;
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    if (colZero[row] === 0) {
      matrix[row] = Array(matrix[0].length).fill(0);
      continue;
      // because the whole array is already set to 0,
      // no need to check each value's column has 0 or not,
      // for updating the individual value to 0.
    }
    for (let col = 0; col < matrix[0].length; col++) {
      if (rowZero[col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  return matrix;
}

module.exports = setZeroes;
