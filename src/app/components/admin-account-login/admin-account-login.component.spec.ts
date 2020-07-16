import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountLoginComponent } from './admin-account-login.component';

describe('AdminAccountComponent', () => {
  let component: AdminAccountLoginComponent;
  let fixture: ComponentFixture<AdminAccountLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
