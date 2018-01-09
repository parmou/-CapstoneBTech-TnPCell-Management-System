import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SindexComponent } from './sindex.component';

describe('SindexComponent', () => {
  let component: SindexComponent;
  let fixture: ComponentFixture<SindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
