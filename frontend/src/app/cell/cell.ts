import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  imports: [],
  template: `
  <div class="cell" style="display: flex; justify-content: center; align-items: center; height: 120px; width: 120px; border: 1px solid black;">
    {{ value }}
  </div>
  `,
  styleUrl: './cell.css'
})
export class Cell {
  @Input() value: 'X' | 'O' | null = null;
}
