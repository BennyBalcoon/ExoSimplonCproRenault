import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceC1Component } from './exercice-c1.component';

describe('ExerciceC1Component', () => {
  let component: ExerciceC1Component;
  let fixture: ComponentFixture<ExerciceC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
