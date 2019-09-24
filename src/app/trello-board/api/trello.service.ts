import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrelloBoard, TrelloList, TrelloCard } from './models';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  private trelloBoard = TrelloBoard.create();
  private trelloBs = new BehaviorSubject<TrelloBoard>(this.trelloBoard);
  public trello$ = this.trelloBs.asObservable();

  constructor() {}

  addCardToList(list: TrelloList) {
    const foundList = this.trelloBoard.lists.find(x => x.id === list.id);
    const card = new TrelloCard(foundList.cards.length, `Card ${foundList.cards.length + 1}`);
    foundList.cards.push(card);
    this.next();
  }

  addList() {
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
    console.log(this.trelloBoard);
  }
}
