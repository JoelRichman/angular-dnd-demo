import { Component, OnInit, Input } from '@angular/core';
import { TrelloService } from '../api/trello.service';
import { TrelloList } from '../api/models';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trello-add-card',
  templateUrl: './trello-add-card.component.html',
  styleUrls: ['./trello-add-card.component.scss']
})
export class TrelloAddCardComponent {

  @Input() list: TrelloList;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private trelloSvc: TrelloService) {
    iconRegistry.addSvgIcon(
        'playlist_add',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/playlist_add.svg'));
  }

  addCard(): void {
    this.trelloSvc.addCardToList(this.list);
  }
}
