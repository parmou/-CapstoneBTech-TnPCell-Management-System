import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonalDetailsComponent } from './update-personal-details.component';

describe('UpdatePersonalDetailsComponent', () => {
  let component: UpdatePersonalDetailsComponent;
  let fixture: ComponentFixture<UpdatePersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
