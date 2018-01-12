import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpoApprovalComponent } from './tpo-approval.component';

describe('TpoApprovalComponent', () => {
  let component: TpoApprovalComponent;
  let fixture: ComponentFixture<TpoApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpoApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpoApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
