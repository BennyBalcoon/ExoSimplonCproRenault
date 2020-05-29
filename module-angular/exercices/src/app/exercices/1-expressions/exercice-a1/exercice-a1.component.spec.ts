import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA1Component } from './exercice-a1.component';

describe('ExerciceA1Component', () => {
  let component: ExerciceA1Component;
  let fixture: ComponentFixture<ExerciceA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
