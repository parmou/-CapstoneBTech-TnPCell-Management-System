import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDataComponent } from './training-data.component';

describe('TrainingDataComponent', () => {
  let component: TrainingDataComponent;
  let fixture: ComponentFixture<TrainingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
