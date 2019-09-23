import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { TrelloBoard, TrelloList, TrelloCard } from './models';
import { moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  private trelloBoard = TrelloBoard.create();
  private trelloBs = new BehaviorSubject<TrelloBoard>(this.trelloBoard);
  public trello$ = this.trelloBs.asObservable();

  constructor() {}

  addCard(column: TrelloList) {
    const card = new TrelloCard(column.cards.length, `Card ${column.cards.length + 1}`);
    const list = this.trelloBoard.lists.find(x => x.id === column.id);
    list.cards.push(card);
    this.next();
  }

  addColumn() {
    const list = new TrelloList(
      this.trelloBoard.lists.length,
      `List ${this.trelloBoard.lists.length + 1}`
    );
    this.trelloBoard.lists.push(list);
    this.next();
  }

  moveList(previousIndex: number, newIndex: number) {
    moveItemInArray(this.trelloBoard.lists, previousIndex, newIndex);
  }

  moveCardInList(listId: string, previousIndex: number, newIndex: number) {
    const list = this.trelloBoard.lists.find(x => x.id === listId);
    moveItemInArray(list.cards, previousIndex, newIndex);
  }

  moveCardToNewList(
    previousListId: string,
    newListId: string,
    previousIndex: number,
    newIndex: number
  ) {
    const previousList = this.trelloBoard.lists.find(x => x.id === previousListId);
    const newList = this.trelloBoard.lists.find(x => x.id === newListId);

    transferArrayItem(previousList.cards, newList.cards, previousIndex, newIndex);
  }

  private next() {
    this.trelloBs.next(this.trelloBoard);
  }
}













/*

  private registeredLists: CdkDropList[] = [];
  private registeredListsBs = new BehaviorSubject<CdkDropList[]>(this.registeredLists);
  registeredLists$ = combineLatest(this.registeredListsBs.asObservable())
    .pipe(distinctUntilChanged(), shareReplay(1));

  registerDropList(list: CdkDropList) {
    this.registeredLists.push(list);
    this.registeredListsBs.next(this.registeredLists);
  }

*/
