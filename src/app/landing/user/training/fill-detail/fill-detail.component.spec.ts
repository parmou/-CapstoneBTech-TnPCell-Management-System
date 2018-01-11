import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillDetailComponent } from './fill-detail.component';

describe('FillDetailComponent', () => {
  let component: FillDetailComponent;
  let fixture: ComponentFixture<FillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
