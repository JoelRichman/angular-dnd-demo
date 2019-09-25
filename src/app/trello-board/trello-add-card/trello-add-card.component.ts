import { Component, OnInit, Input } from '@angular/core';
import { TrelloService } from '../api/trello.service';
import { TrelloList } from '../api/models';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trello-add-card',
  template: `
    <button (click)="this.trelloSvc.addCardToList(list)">
      <mat-icon svgIcon="playlist_add" aria-hidden="false" aria-label="plus"></mat-icon>
    </button>
  `,
  styles: [
    `
      button {
        border: none;
        outline: none;
      }
    `
  ]
})
export class TrelloAddCardComponent {
  @Input() list: TrelloList;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public trelloSvc: TrelloService
  ) {
    iconRegistry.addSvgIcon(
      'playlist_add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/playlist_add.svg')
    );
  }
}
