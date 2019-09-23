import { Component, OnInit } from '@angular/core';
import { TrelloService } from './api/trello.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {

  vm = {
    board$: this.trelloSvc.trello$
  };

  constructor(private trelloSvc: TrelloService) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === event.container.id) {
      this.trelloSvc.moveList(event.previousIndex, event.currentIndex);
    }
  }
}
