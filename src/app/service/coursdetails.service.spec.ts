import { TestBed } from '@angular/core/testing';

import { CoursdetailsService } from './coursdetails.service';

describe('CoursdetailsService', () => {
  let service: CoursdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
