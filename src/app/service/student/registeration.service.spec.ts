import { TestBed, inject } from '@angular/core/testing';

import { RegisterationService } from './registeration.service';

describe('RegisterationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterationService]
    });
  });

  it('should be created', inject([RegisterationService], (service: RegisterationService) => {
    expect(service).toBeTruthy();
  }));
});
