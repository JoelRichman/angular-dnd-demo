import { Component, OnInit, Input } from '@angular/core';
import { TrelloList } from '../api/models';
import { TrelloService } from '../api/trello.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { map, tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloColumnComponent implements OnInit {
  @Input() list: TrelloList;

  // listIds: string[];

  constructor(private trelloSvc: TrelloService) {
  }

  // filter(x => x.id !== this.list.id)

  ngOnInit() {
    // this.trelloSvc.trello$.pipe(
    //   map(board => {
    //     return this.list ? board.lists.map(l => `list${l.sequence}`) : [];
    //   }
    //   ),
    //   tap(value => console.log(value))
    // ).subscribe(x => {
    //   this.listIds = x; // JSON.stringify(x).replace(/"/g, '\'');
    // });

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
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
