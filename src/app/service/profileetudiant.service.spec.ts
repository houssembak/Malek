import { TestBed } from '@angular/core/testing';

import { ProfileetudiantService } from './profileetudiant.service';

describe('ProfileetudiantService', () => {
  let service: ProfileetudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileetudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
