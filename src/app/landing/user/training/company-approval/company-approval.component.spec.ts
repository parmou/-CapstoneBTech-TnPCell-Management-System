import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyApprovalComponent } from './company-approval.component';

describe('CompanyApprovalComponent', () => {
  let component: CompanyApprovalComponent;
  let fixture: ComponentFixture<CompanyApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
