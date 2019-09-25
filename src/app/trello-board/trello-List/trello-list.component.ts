import { Component, Input } from '@angular/core';
import { TrelloList } from '../api/models';
import { TrelloService } from '../api/trello.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloColumnComponent {
  @Input() list: TrelloList;
  @Input() connectedLists = [];

  constructor(private trelloSvc: TrelloService) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === event.container.id) {
      this.trelloSvc.moveCardInList(this.list.id, event.previousIndex, event.currentIndex);
    } else {
      this.trelloSvc.moveCardToNewList(
        event.previousContainer.id,
        event.container.id,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
