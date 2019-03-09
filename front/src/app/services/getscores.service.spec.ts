import { TestBed, inject } from '@angular/core/testing';

import { GetscoresService } from './getscores.service';

describe('GetscoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetscoresService]
    });
  });

  it('should be created', inject([GetscoresService], (service: GetscoresService) => {
    expect(service).toBeTruthy();
  }));
});
