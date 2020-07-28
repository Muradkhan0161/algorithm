countNQueensSolutions = function(n) {
    if (n === 0) return 1;
    window.nMask = 2 ** n - 1;
    window.solutionCount = 0;
  
    _start(0, 0, 0);
  
    return window.solutionCount;
  
    function _start(col, lDiag, rDiag) {
      if (col === window.nMask) window.solutionCount++;
  
      var open = ~(col | lDiag | rDiag) & nMask;
  
      // run the right half of possibilities (small half for odd n)
      var halfNumPoss = window.bitstringDecomps[open].length >> 1;
      for (let i = 0; i < halfNumPoss; i++) {
        var poss = window.bitstringDecomps[open][i];
        _main(col | poss, (lDiag | poss) >> 1, (rDiag | poss) << 1);
      }
      window.solutionCount <<= 1;
  
      // run the central branch if N is odd
      if (n % 2 === 1) {
        var poss = window.bitstringDecomps[open][halfNumPoss];
  
        var prevCt = window.solutionCount;
        window.solutionCount = 0;
        _oddOpt(col | poss, (lDiag | poss) >> 1, (rDiag | poss) << 1);
        window.solutionCount = window.solutionCount * 2 + prevCt;
      }
    }
  
    // function to split the branches of the central tree when N is odd
    function _oddOpt(col, lDiag, rDiag) {
      if (col === window.nMask) window.solutionCount++;
  
      var open = ~(col | lDiag | rDiag) & window.nMask;
      // split the tree
      var halfNumPoss = window.bitstringDecomps[open].length >> 1;
      for (let i = 0; i < halfNumPoss; i++) {
        var poss = window.bitstringDecomps[open][i];
        _main(col | poss, (lDiag | poss) >> 1, (rDiag | poss) << 1);
      }
    }
  
    // main recursive function
    function _main(col, lDiag, rDiag) {
      if (col === window.nMask) window.solutionCount++;
  
      var open = ~(col | lDiag | rDiag) & window.nMask;
  
      while (open > 0) {
        var poss = open & -open;
        _main(col | poss, (lDiag | poss) >> 1, (rDiag | poss) << 1);
        open ^= poss;
      }
    }
  };

  console.log(countNQueensSolutions(4))