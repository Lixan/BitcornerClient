import { TestBed, inject } from '@angular/core/testing';

import { BitweetService } from './bitweet.service';

describe('BitweetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitweetService]
    });
  });

  it('should be created', inject([BitweetService], (service: BitweetService) => {
    expect(service).toBeTruthy();
  }));
});
