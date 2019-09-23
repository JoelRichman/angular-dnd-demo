import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TalkIdeasComponent } from './talk-ideas/talk-ideas.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';
import { TrelloColumnComponent } from './trello-board/trello-List/trello-list.component';
import { TrelloCardComponent } from './trello-board/trello-card/trello-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrelloAddListComponent } from './trello-board/trello-add-list/trello-add-list.component';
import { TrelloAddCardComponent } from './trello-board/trello-add-card/trello-add-card.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TalkIdeasComponent,
    CountdownComponent,
    TrelloBoardComponent,
    TrelloColumnComponent,
    TrelloCardComponent,
    TrelloAddListComponent,
    TrelloAddCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
