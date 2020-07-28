function find_all_arrangements(n) {
    // console.log('running')
    const allResult = [];

    function isValid(row, col, board) {
      // console.log(board);
  // Checks the ← direction
    for(var i=0; i<col; i++){
        // console.log("out")
        // console.log(board)
      if (board[row][i] === "q") {
        //   console.log("running")
        return false;
      }
    }
// console.log('out')
    // Checks the ↖ direction 
    for(var i=row, j=col; i>=0 && j>=0; i--, j--){
      // console.log(board)
      if (board[i][j] === "q") {
        return false;
      }
    }
// console.log('more')

    // Checks the ↙ direction 
    for(var i=row, j=col; j>=0 && i<n; i++, j--){
      // console.log(board)
      if (board[i][j] === "q") {
        return false;
      }
    }
// console.log(board);
    return true;
    }

    function find(col, result) {
        if (col === n) {
          // this deep clone the 2d array
          allResult.push(JSON.parse(JSON.stringify(result)));
          return;
        }
        for (let i = 0; i < n; i++) {
            // console.log(board)
            count += 1;
            // console.log(count)
            if (isValid(i, col, result)) {
                result[i][col] = "q";
                // console.log(board);
                find(col + 1, result)
                result[i][col] = "-";
                
            }
        }
    return false;
    }

  function generateBoard(n){
    var board=[];
    for(var i=0; i<n; i++){
      board[i]=[];
      for(var j=0; j<n; j++){
        board[i][j]="-";
      }
    }
    return board;
  }

  let count =0;
  let mount =0;
  var board = generateBoard(n);
  find(0, board);
  return allResult;
}

console.log(find_all_arrangements(4))