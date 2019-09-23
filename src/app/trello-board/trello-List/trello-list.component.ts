import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TrelloList } from '../api/models';
import { TrelloService } from '../api/trello.service';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloColumnComponent implements OnInit, AfterViewInit {

  @Input() list: TrelloList;
  @ViewChild(CdkDropList, { static: false }) dropList: CdkDropList;

  dropLists$ = this.trelloSvc.registeredLists$.pipe(map(x => x[0] || []));

  constructor(private trelloSvc: TrelloService) {}

  ngOnInit() { }

  ngAfterViewInit() {
    this.trelloSvc.registerDropList(this.dropList);
  }

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
