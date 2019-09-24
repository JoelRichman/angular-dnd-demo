import { Component, OnInit } from '@angular/core';
import { TrelloService } from '../api/trello.service';

@Component({
  selector: 'app-trello-add-list',
  templateUrl: './trello-add-list.component.html',
  styleUrls: ['./trello-add-list.component.scss']
})
export class TrelloAddListComponent implements OnInit {

  constructor(private trelloSvc: TrelloService) { }

  ngOnInit() {
  }

  addList() {
    this.trelloSvc.addList();
  }

}
