import { TestBed } from '@angular/core/testing';

import { ProfileformateurService } from './profileformateur.service';

describe('ProfileformateurService', () => {
  let service: ProfileformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
