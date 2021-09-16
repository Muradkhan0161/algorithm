/** @format */

function find_all_arrangements(n) {
  const allResult = [];

  function isValid(row, col, board) {
    // Checks the ← direction
    for (var i = 0; i < col; i++) {
      // console.log( row +'1'+ col)
      if (board[row][i] === "q") {
        // console.log("running")
        return false;
      }
    }
    // Checks the ↖ direction
    for (var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      // console.log( row +'2'+ col)
      if (board[i][j] === "q") {
        return false;
      }
    }

    // Checks the ↙ direction
    for (var i = row, j = col; j >= 0 && i < n; i++, j--) {
      // console.log('3')
      if (board[i][j] === "q") {
        return false;
      }
    }
    return true;
  }

  function find(col, result) {
    if (col === n) {
      count = count + 1;
      //  console.log(count);
      // This will add next array as object in the final result of the array
      allResult.push(JSON.parse(JSON.stringify(result)));
      return;
    }
    for (let i = 0; i < n; i++) {
      // console.log('down')
      // console.log(board)
      if (isValid(i, col, result)) {
        result[i][col] = "q";
        // console.log(board);
        find(col + 1, result);
        result[i][col] = "-";
        // console.log(board);
      }
    }
    return false;
  }

  function generateBoard(n) {
    var board = [];
    for (var i = 0; i < n; i++) {
      board[i] = [];
      for (var j = 0; j < n; j++) {
        board[i][j] = " ";
      }
    }
    return board;
  }
  // console.log(count);
  var board = generateBoard(n);
  find(0, board);
  // console.log(count);
  return allResult;
}

let count = 0;
console.log(find_all_arrangements(4));
