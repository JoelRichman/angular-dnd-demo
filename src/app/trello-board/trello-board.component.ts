import { Component, OnInit } from '@angular/core';
import { TrelloService } from './api/trello.service';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent {
  board$ = this.trelloSvc.trello$;
  connectedlists$ = this.trelloSvc.trello$.pipe(map(board => board.lists.map(list => list.id)));

  constructor(private trelloSvc: TrelloService) {}

  drop(event: CdkDragDrop<string[]>) {
    this.trelloSvc.moveList(event.previousIndex, event.currentIndex);
  }
}
