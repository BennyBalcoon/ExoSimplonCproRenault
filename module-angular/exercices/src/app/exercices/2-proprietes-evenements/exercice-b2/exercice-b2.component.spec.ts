import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB2Component } from './exercice-b2.component';

describe('ExerciceB2Component', () => {
  let component: ExerciceB2Component;
  let fixture: ComponentFixture<ExerciceB2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceB2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
