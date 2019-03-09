import { TestBed, inject } from '@angular/core/testing';

import { AddscoreService } from './addscore.service';

describe('AddscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddscoreService]
    });
  });

  it('should be created', inject([AddscoreService], (service: AddscoreService) => {
    expect(service).toBeTruthy();
  }));
});
