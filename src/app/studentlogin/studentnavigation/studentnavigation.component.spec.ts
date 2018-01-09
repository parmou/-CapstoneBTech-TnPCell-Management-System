import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentnavigationComponent } from './studentnavigation.component';

describe('StudentnavigationComponent', () => {
  let component: StudentnavigationComponent;
  let fixture: ComponentFixture<StudentnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
