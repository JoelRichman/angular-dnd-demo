import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-talk-ideas',
  templateUrl: './talk-ideas.component.html',
  styleUrls: ['./talk-ideas.component.scss']
})
export class TalkIdeasComponent implements OnInit {
  talks = ['NGRX 8', 'Large Component Refactor', 'Resizable Containers', 'Drag and Drop'];
  declined = [];
  accepted = [];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
