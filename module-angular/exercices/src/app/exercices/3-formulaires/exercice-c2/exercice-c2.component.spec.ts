import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceC2Component } from './exercice-c2.component';

describe('ExerciceC2Component', () => {
  let component: ExerciceC2Component;
  let fixture: ComponentFixture<ExerciceC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
