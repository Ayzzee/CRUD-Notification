import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccess } from './login-access';

describe('LoginAccess', () => {
  let component: LoginAccess;
  let fixture: ComponentFixture<LoginAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
