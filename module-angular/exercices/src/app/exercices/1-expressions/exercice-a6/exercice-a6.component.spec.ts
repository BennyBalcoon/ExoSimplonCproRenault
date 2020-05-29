import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA6Component } from './exercice-a6.component';

describe('ExerciceA6Component', () => {
  let component: ExerciceA6Component;
  let fixture: ComponentFixture<ExerciceA6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
