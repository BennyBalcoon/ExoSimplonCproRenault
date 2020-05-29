import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceA4Component } from './exercice-a4.component';

describe('ExerciceA4Component', () => {
  let component: ExerciceA4Component;
  let fixture: ComponentFixture<ExerciceA4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceA4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
