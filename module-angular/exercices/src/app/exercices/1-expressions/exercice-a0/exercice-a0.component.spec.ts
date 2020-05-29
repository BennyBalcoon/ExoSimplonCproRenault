import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA0Component } from './exercice-a0.component';

describe('ExerciceA0Component', () => {
  let component: ExerciceA0Component;
  let fixture: ComponentFixture<ExerciceA0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
