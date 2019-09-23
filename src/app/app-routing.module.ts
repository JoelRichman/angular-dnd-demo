import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalkIdeasComponent } from './talk-ideas/talk-ideas.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TrelloBoardComponent } from './trello-board/trello-board.component';

const routes: Routes = [
  {
    path: 'talk-ideas',
    component: TalkIdeasComponent
  },
  {
    path: 'countdown',
    component: CountdownComponent
  },
  {
    path: 'trello',
    component: TrelloBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
