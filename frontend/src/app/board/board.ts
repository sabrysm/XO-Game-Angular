import { Component } from '@angular/core';
import { Cell } from '../cell/cell';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [Cell, CommonModule],
  template: `
      <h3>X O Game</h3>
      @if (winner) {
        <h4>The winner is {{ winner }}!</h4>
      } @else if (isDraw) {
        <h4>It's a draw!</h4>
      } @else {
        <h4>It is {{ currentPlayer }}'s turn</h4>
      }
      <div class="board">
        @for (row of rows; track $index) {
          <div class="board-row">
            @for (cell of row; track $index) {
              <app-cell
                [value]='cell.value'
                (click)='makeMove(cell.index)' />
            }
          </div>
        }
      </div>
  `,
  styleUrl: './board.css'
})
export class Board {
  currentPlayer: 'X' | 'O' = 'X';
  board: string[] = Array(9).fill('');
  winner: string | null = null;
  isDraw: boolean = false;

  get rows() {
    return [0, 1, 2].map(row =>
      [0, 1, 2].map(col => {
        const idx = row * 3 + col;
        return { value: this.board[idx], index: idx };
      })
    );
  }

  makeMove(index: number): void {
    if (this.board[index] || this.winner) return;
    this.board[index] = this.currentPlayer;
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
    } else if (this.checkDraw()) {
      this.isDraw = true;
    }
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  checkWinner() {
    const winning_combos: number[][] = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    return winning_combos.some(([a,b,c]) =>
      this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]
    );
  }

  checkDraw() {
    return !this.checkWinner() && this.board.every((v,i,a) => v != '');
  }
}
