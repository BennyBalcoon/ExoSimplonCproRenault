import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA8Component } from './exercice-a8.component';

describe('ExerciceA8Component', () => {
  let component: ExerciceA8Component;
  let fixture: ComponentFixture<ExerciceA8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
