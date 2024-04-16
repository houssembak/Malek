import { TestBed } from '@angular/core/testing';

import { ListformateurService } from './listformateur.service';

describe('ListformateurService', () => {
  let service: ListformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
