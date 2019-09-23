import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TrelloList } from '../api/models';
import { TrelloService } from '../api/trello.service';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloColumnComponent implements OnInit, AfterViewInit {

  @Input() list: TrelloList;

  constructor(private trelloSvc: TrelloService) {}

  ngOnInit() { }

  ngAfterViewInit() {
  }

}


/*

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






  @ViewChild(CdkDropList, { static: false }) dropList: CdkDropList;
  dropLists$ = this.trelloSvc.registeredLists$.pipe(map(x => x[0] || []));


  ngAfterViewInit() {
    this.trelloSvc.registerDropList(this.dropList);
  }

*/
