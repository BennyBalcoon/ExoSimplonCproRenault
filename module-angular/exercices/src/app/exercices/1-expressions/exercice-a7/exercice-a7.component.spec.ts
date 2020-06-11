import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA7Component } from './exercice-a7.component';

describe('ExerciceA7Component', () => {
  let component: ExerciceA7Component;
  let fixture: ComponentFixture<ExerciceA7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
