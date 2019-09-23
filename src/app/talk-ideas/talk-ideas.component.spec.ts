import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkIdeasComponent } from './talk-ideas.component';

describe('TalkIdeasComponent', () => {
  let component: TalkIdeasComponent;
  let fixture: ComponentFixture<TalkIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
