import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityHighlightsComponent } from './university-highlights.component';

describe('UniversityHighlightsComponent', () => {
  let component: UniversityHighlightsComponent;
  let fixture: ComponentFixture<UniversityHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
