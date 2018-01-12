import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicdetailComponent } from './academicdetail.component';

describe('AcademicdetailComponent', () => {
  let component: AcademicdetailComponent;
  let fixture: ComponentFixture<AcademicdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
