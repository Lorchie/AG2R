import { TestBed } from '@angular/core/testing';

import { ApiDonneService } from './api-donne.service';

describe('ApiDonneService', () => {
  let service: ApiDonneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDonneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
