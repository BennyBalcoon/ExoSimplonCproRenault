import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB1Component } from './exercice-b1.component';

describe('ExerciceB1Component', () => {
  let component: ExerciceB1Component;
  let fixture: ComponentFixture<ExerciceB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
