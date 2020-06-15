import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB7Component } from './exercice-b7.component';

describe('ExerciceB7Component', () => {
  let component: ExerciceB7Component;
  let fixture: ComponentFixture<ExerciceB7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceB7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceB7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
