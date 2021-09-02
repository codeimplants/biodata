import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpSignInComponent } from './user-sign-up-sign-in.component';

describe('UserSignUpSignInComponent', () => {
  let component: UserSignUpSignInComponent;
  let fixture: ComponentFixture<UserSignUpSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignUpSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignUpSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
