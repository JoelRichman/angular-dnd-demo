import { Component, OnInit } from '@angular/core';
import { TrelloService } from './api/trello.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {

  board$ = this.trelloSvc.trello$;

  constructor(private trelloSvc: TrelloService) { }

  ngOnInit() {
  }

}
