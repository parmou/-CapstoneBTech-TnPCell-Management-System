import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNavigationComponent } from './company-navigation.component';

describe('CompanyNavigationComponent', () => {
  let component: CompanyNavigationComponent;
  let fixture: ComponentFixture<CompanyNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
