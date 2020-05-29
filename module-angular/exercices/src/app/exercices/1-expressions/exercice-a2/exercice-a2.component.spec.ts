import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA2Component } from './exercice-a2.component';

describe('ExerciceA2Component', () => {
  let component: ExerciceA2Component;
  let fixture: ComponentFixture<ExerciceA2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
