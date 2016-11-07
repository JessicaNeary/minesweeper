document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var size = prompt("How big would you like your game board?",6)
var board = createBoard(size);

function cell(r,c){
  this.row = r;
  this.col = c;
  this.isMine = false;
  this.hidden = true;
}

function createBoard(size){
	var board = {
		cells: []
	}
	for(i=0; i<size; i++){
		for(j=0; j<size; j++){
			var c = new cell(i,j);
			if(Math.random()<0.2){
				c.isMine = true;
			}
			board.cells.push(c);
		}
	}
	return board
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(i=0; i<board.cells.length; i++){
    var mines = countSurroundingMines(board.cells[i])
    board.cells[i].surroundingMines = mines;
  }
  lib.initBoard()
	document.addEventListener('click',checkForWin);
	document.addEventListener('contextmenu', checkForWin);
}

// Define this: fqunction to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(i=0; i<board.cells.length; i++){
    //ehecks if mines are all marked
    if(board.cells[i].isMine === true){
			if(board.cells[i].isMarked !== true){
				return false;
			}
    }
    //checks if cells are all visible
    else{
  		if(board.cells[i].hidden === true){
				return false;
			}
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
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
  var count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for(var i=0; i<surroundingCells.length; i++){
		console.log(surroundingCells[i]);
		console.log(count);
    if(surroundingCells[i].isMine){
      count++;
    }
  }
  return count;
}

function reset(){
	console.log("Would you like to restart?");
}
