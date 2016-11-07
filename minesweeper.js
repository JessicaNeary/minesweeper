document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
		new cell(1,1),
		new cell(0,1),
		new cell(1,0),
		new cell(0,0),
		new cell(0,2),
		new cell(1,2),
		new cell(2,0),
		new cell(2,1),
		new cell(2,2)]
}

function cell(r,c){
  this.row = r;
  this.col = c;
  this.isMine = true;
  this.hidden = true;
}

// function mine(r,c){
//   this.row = r;
//   this.col = c;
//   this.isMine = true;
//   this.hidden = true;
// }

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(i=0; i<board.cells.length; i++){
    var mines = countSurroundingMines(board.cells[i])
    board.cells[i].surroundingMines = mines;
  }
  lib.initBoard()

}

// Define this: fqunction to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // for(i=0; i<board.cells.length; i++){
  //   //ehecks if mines are all marked
  //   if(board.cells[i].isMine === true){
  //   }
  //   //checks if cells are all visible
  //   else{
  //
  //   }
  // }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for(var i=0; i<=surroundingCells.length; i++){
		console.log(surroundingCells[i]);
		console.log(surroundingCells[i].isMine);
    if(surroundingCells[i].isMine){
      count++;
    }
  }
  return count;
}
