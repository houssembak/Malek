import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileetudiantComponent } from './profileetudiant.component';

describe('ProfileetudiantComponent', () => {
  let component: ProfileetudiantComponent;
  let fixture: ComponentFixture<ProfileetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
