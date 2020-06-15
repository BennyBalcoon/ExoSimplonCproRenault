import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB4Component } from './exercice-b4.component';

describe('ExerciceB4Component', () => {
  let component: ExerciceB4Component;
  let fixture: ComponentFixture<ExerciceB4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceB4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceB4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
