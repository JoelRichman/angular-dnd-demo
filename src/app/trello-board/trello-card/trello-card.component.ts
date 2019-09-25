import { Component, OnInit, Input } from '@angular/core';
import { TrelloCard } from '../api/models';

@Component({
  selector: 'app-trello-card',
  template: `
    <div class="card">
      {{ card.title }}
    </div>
  `,
  styles: [
    `
      .card {
        margin: 10px;
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 0.5em;
        background-color: white;
        cursor: move;
      }
    `
  ]
})
export class TrelloCardComponent {
  @Input() card: TrelloCard;

  constructor() {}
}
