import { Component, OnInit } from '@angular/core';
import { TrelloService } from '../api/trello.service';

@Component({
  selector: 'app-trello-add-list',
  template: `
    <div class="trello-add-list">
      <button (click)="this.trelloSvc.addList()">
        <mat-icon svgIcon="playlist_add" aria-hidden="false" aria-label="plus"></mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .trello-add-list {
        width: 200px;
        padding: 10px;
        margin: 10px;
        border: 1px solid lightgray;
        border-radius: 0.5em;
        background-color: rgb(235, 236, 240);
      }

      button {
        border: none;
        outline: none;
      }
    `
  ]
})
export class TrelloAddListComponent {
  constructor(public trelloSvc: TrelloService) {}
}
