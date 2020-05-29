import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA5Component } from './exercice-a5.component';

describe('ExerciceA5Component', () => {
  let component: ExerciceA5Component;
  let fixture: ComponentFixture<ExerciceA5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
