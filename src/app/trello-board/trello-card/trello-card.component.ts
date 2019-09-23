import { Component, OnInit, Input } from '@angular/core';
import { TrelloCard } from '../api/models';

@Component({
  selector: 'app-trello-card',
  templateUrl: './trello-card.component.html',
  styleUrls: ['./trello-card.component.scss']
})
export class TrelloCardComponent implements OnInit {
  @Input() card: TrelloCard;

  constructor() {}

  ngOnInit() {}
}
