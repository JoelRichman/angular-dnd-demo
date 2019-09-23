import { Component, OnInit } from '@angular/core';
import { TrelloService } from './api/trello.service';

@Component({
  selector: 'app-trello-board',
  templateUrl: './trello-board.component.html',
  styleUrls: ['./trello-board.component.scss']
})
export class TrelloBoardComponent implements OnInit {

  vm = {
    board$: this.trelloService.trello$
  };

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
  }

}
