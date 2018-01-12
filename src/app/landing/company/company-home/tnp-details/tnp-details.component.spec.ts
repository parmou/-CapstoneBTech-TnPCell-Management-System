import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpDetailsComponent } from './tnp-details.component';

describe('TnpDetailsComponent', () => {
  let component: TnpDetailsComponent;
  let fixture: ComponentFixture<TnpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
