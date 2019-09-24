import { Component, OnInit } from '@angular/core';
import { TrelloService } from './api/trello.service';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {
  board$ = this.trelloSvc.trello$;
  registeredLists: CdkDropList[] = [];

  constructor(private trelloSvc: TrelloService) {}

  ngOnInit() {}

  onRegisterDropList(dropList: CdkDropList) {
    this.registeredLists.push(dropList);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.trelloSvc.moveList(event.previousIndex, event.currentIndex);
  }
}
