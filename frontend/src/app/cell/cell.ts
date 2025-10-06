import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  imports: [],
  template: `
  <div class="cell">{{ value }}</div>
  `,
  styleUrl: './cell.css'
})
export class Cell {
  @Input() value: string | null = null;
}
