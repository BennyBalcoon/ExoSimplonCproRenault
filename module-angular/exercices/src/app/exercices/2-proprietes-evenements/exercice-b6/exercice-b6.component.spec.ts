import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB6Component } from './exercice-b6.component';

describe('ExerciceB6Component', () => {
  let component: ExerciceB6Component;
  let fixture: ComponentFixture<ExerciceB6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceB6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceB6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
