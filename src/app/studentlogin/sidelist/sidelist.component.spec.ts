import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelistComponent } from './sidelist.component';

describe('SidelistComponent', () => {
  let component: SidelistComponent;
  let fixture: ComponentFixture<SidelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
