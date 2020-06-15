import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceB5Component } from './exercice-b5.component';

describe('ExerciceB5Component', () => {
  let component: ExerciceB5Component;
  let fixture: ComponentFixture<ExerciceB5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceB5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceB5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
