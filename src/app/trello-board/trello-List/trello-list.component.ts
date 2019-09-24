import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TrelloList } from '../api/models';
import { TrelloService } from '../api/trello.service';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloColumnComponent implements OnInit, AfterViewInit {
  @Input() list: TrelloList;

  constructor(private trelloSvc: TrelloService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }
}
