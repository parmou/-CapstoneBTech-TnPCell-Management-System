import { TestBed, inject } from '@angular/core/testing';

import { EditDetailsService } from './edit-details.service';

describe('EditDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditDetailsService]
    });
  });

  it('should be created', inject([EditDetailsService], (service: EditDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
