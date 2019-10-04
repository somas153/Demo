import { TestBed } from '@angular/core/testing';

import { IncorService } from './incor.service';

describe('IncorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncorService = TestBed.get(IncorService);
    expect(service).toBeTruthy();
  });
});
