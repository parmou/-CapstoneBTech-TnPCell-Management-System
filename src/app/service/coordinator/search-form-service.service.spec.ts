import { TestBed, inject } from '@angular/core/testing';

import { SearchFormServiceService } from './search-form-service.service';

describe('SearchFormServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchFormServiceService]
    });
  });

  it('should be created', inject([SearchFormServiceService], (service: SearchFormServiceService) => {
    expect(service).toBeTruthy();
  }));
});
