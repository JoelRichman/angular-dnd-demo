export class TrelloBoard {
  title: string;
  lists: Array<TrelloList>;
  constructor() {
    this.lists = [];
  }
  public static create(): TrelloBoard {
    const board = new TrelloBoard();
    board.title = 'New Board';
    board.lists.push(new TrelloList(0));
    board.lists[0].title = 'List 1';
    board.lists[0].cards.push(new TrelloCard(0, `Card 1`));
    return board;
  }
}

export class TrelloList {
  id: string;
  sequence: number;
  title: string;
  cards: Array<TrelloCard>;
  constructor(sequence: number, title?: string) {
    this.title = title || 'List';
    this.id = uuid();
    this.sequence = sequence;
    this.cards = [];
  }
}

export class TrelloCard {
  id: string;
  sequence: number;
  title: string;
  description: string;
  constructor(sequence: number, title?: string) {
    this.title = title || 'Card';
    this.id = uuid();
    this.sequence = sequence;
  }
}

function uuid() {
  return crypto.getRandomValues(new Uint32Array(4)).join('-');
}
