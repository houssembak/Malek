import { TestBed } from '@angular/core/testing';

import { ListformationsService } from './listformation.service';

describe('ListformationService', () => {
  let service: ListformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
