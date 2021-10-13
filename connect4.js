/*
Introduction
We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games
Connect 4
Task
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
Rules
If a player successfully has 4 discs horizontally or vertically then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.
*/

/*
//WORKING SOLUTION
class Connect4{
  
    constructor() {
      this.gameFinished = false;
      this.n = 1;
      this.hadTurn = "1";
      this.board = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ];
    }
    
    play(col) {
      //CHECK FOR FINISHED GAME
      if(this.gameFinished === true) return "Game has finished!";
  
      //CHECK FOR FULL COLUMN, PLAYER TAKES SPACE ON BOARD
      let currentRow = 0;
      for(let i = 5; i >= 0; i--){
        if(i === 0 && this.board[i][col] !== 0) return "Column full!"
        if(this.board[i][col] === 0) {
          this.board[i][col] = this.n;
          currentRow = i;
          break;
        }
      }
  
      //CHECK FOR WINNER VERTICAL AND HORIZONTAL
      let [vChecker, hChecker] = ["",""];
      for (let i = 0; i < 6; i++){
        vChecker += `${this.board[i][col].toString()}`;
      }
      for (let i = 0; i < 7; i++){
        hChecker += `${this.board[currentRow][i].toString()}`;
      }
      if (vChecker.includes("1111") || vChecker.includes("2222") || hChecker.includes("1111") || hChecker.includes("2222")) {
        this.gameFinished = true;
        return `Player ${this.n} wins!`;
      }

      //CHECK FOR WINNER DIAGONAL
      if(this.board[currentRow-1] && this.board[currentRow-2] && this.board[currentRow-3]){
        if (this.board[currentRow-1][col+1] === this.n && this.board[currentRow-2][col+2] === this.n && this.board[currentRow-3][col+3] === this.n)
            {
            this.gameFinished = true;
            return `Player ${this.n} wins!`;
            }
        }

      if(this.board[currentRow+1] && this.board[currentRow+2] && this.board[currentRow+3]){
        if (this.board[currentRow+1][col-1] === this.n && this.board[currentRow+2][col-2] === this.n && this.board[currentRow+3][col-3] === this.n)
            {
            this.gameFinished = true;
            return `Player ${this.n} wins!`;
            }
    }

      if(this.board[currentRow+1] && this.board[currentRow+2] && this.board[currentRow+3]){
        if (this.board[currentRow+1][col+1] === this.n && this.board[currentRow+2][col+2] === this.n && this.board[currentRow+3][col+3] === this.n)
            {
            this.gameFinished = true;
            return `Player ${this.n} wins!`;
            }
    }

      if(this.board[currentRow-1] && this.board[currentRow-2] && this.board[currentRow-3]){
        if (this.board[currentRow-1][col-1] === this.n && this.board[currentRow-2][col-2] === this.n && this.board[currentRow-3][col-3] === this.n)
            {
            this.gameFinished = true;
            return `Player ${this.n} wins!`;
            }
        }

  
      //ADJUST CURRENT AND NEXT PLAYER
      if (this.n === 1) {
        this.n = 2;
        this.hadTurn = "1";
      }
      else {
        this.n = 1;
        this.hadTurn = "2";
      }
  
      //RETURN WHO JUST HAD TURN
      return `Player ${this.hadTurn} has a turn`;
    };
  };
*/

//CLEANER SOLUTION, NEEDS DEBUGGING

class Connect4{
  
    constructor() {
      this.gameFinished = false;
      this.n = 1;
      this.hadTurn = "1";
      this.currentRow = 0;
      this.col = 0;
      this.board = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ];
    }

    move(){
        for(let i = 5; i >= 0; i--){
            if(i === 0 && this.board[i][this.col] !== 0) return "Column full!"
            if(this.board[i][this.col] === 0) {
            this.board[i][this.col] = this.n;
            this.currentRow = i;
            break;
            }
        }
    }

    checkWinnerVerticalHorizontal(){
        let [vChecker, hChecker] = ["",""];
        for (let i = 0; i < 6; i++){
            vChecker += `${this.board[i][this.col].toString()}`;
        }
        for (let i = 0; i < 7; i++){
            hChecker += `${this.board[this.currentRow][i].toString()}`;
        }
        if (vChecker.includes("1111") || vChecker.includes("2222") || hChecker.includes("1111") || hChecker.includes("2222")) {
            this.gameFinished = true;
            return `Player ${this.n} wins!`;
        }
    }

    checkWinnerDiagonal(){
        if(this.board[this.currentRow-1] && this.board[this.currentRow-2] && this.board[this.currentRow-3]){
            if (this.board[this.currentRow-1][this.col+1] === this.n && this.board[this.currentRow-2][this.col+2] === this.n && this.board[this.currentRow-3][this.col+3] === this.n)
                {
                this.gameFinished = true;
                return `Player ${this.n} wins!`;
                }
            }
    
        if(this.board[this.currentRow+1] && this.board[this.currentRow+2] && this.board[this.currentRow+3]){
            if (this.board[this.currentRow+1][this.col-1] === this.n && this.board[this.currentRow+2][this.col-2] === this.n && this.board[this.currentRow+3][this.col-3] === this.n)
                {
                this.gameFinished = true;
                return `Player ${this.n} wins!`;
                }
        }
    
        if(this.board[this.currentRow+1] && this.board[this.currentRow+2] && this.board[this.currentRow+3]){
            if (this.board[this.currentRow+1][this.col+1] === this.n && this.board[this.currentRow+2][this.col+2] === this.n && this.board[this.currentRow+3][this.col+3] === this.n)
                {
                this.gameFinished = true;
                return `Player ${this.n} wins!`;
                }
        }
    
        if(this.board[this.currentRow-1] && this.board[this.currentRow-2] && this.board[this.currentRow-3]){
            if (this.board[this.currentRow-1][this.col-1] === this.n && this.board[this.currentRow-2][this.col-2] === this.n && this.board[this.currentRow-3][this.col-3] === this.n)
                {
                this.gameFinished = true;
                return `Player ${this.n} wins!`;
                }
            }
    }

    adjustPlayers(){
        if (this.n === 1) {
            this.n = 2;
            this.hadTurn = "1";
        }
        else {
            this.n = 1;
            this.hadTurn = "2";
        }
    }
    
    play(col) {
      this.col = col;

      if(this.gameFinished === true) return "Game has finished!";
  
      this.move();
      this.checkWinnerVerticalHorizontal();
      this.checkWinnerDiagonal();
      this.adjustPlayers();
      
      return `Player ${this.hadTurn} has a turn`;
    };
  };