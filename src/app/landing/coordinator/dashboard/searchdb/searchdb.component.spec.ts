import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdbComponent } from './searchdb.component';

describe('SearchdbComponent', () => {
  let component: SearchdbComponent;
  let fixture: ComponentFixture<SearchdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
