import { Component, signal } from '@angular/core';
import { Board } from './board/board';
@Component({
  selector: 'app-root',
  imports: [Board],
  template: `
      <app-board />
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
