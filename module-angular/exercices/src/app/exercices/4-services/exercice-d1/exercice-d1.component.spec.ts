import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceD1Component } from './exercice-d1.component';

describe('ExerciceD1Component', () => {
  let component: ExerciceD1Component;
  let fixture: ComponentFixture<ExerciceD1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceD1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
