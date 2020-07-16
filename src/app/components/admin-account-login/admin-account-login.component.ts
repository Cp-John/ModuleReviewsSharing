import { Component, OnInit } from '@angular/core';
import { AdminAccountService } from 'src/app/services/admin-account.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-account-login',
  templateUrl: './admin-account-login.component.html',
  styleUrls: ['./admin-account-login.component.css']
})
export class AdminAccountLoginComponent implements OnInit {

  public password: string = '';

  public accountName: string = '';

  public showSpinner: boolean = false;

  public showErrorMessage: boolean = false;

  public isSuccessfulLogin: boolean = false;

  constructor(public adminAccountService: AdminAccountService, public route: Router) { }

  ngOnInit(): void {
    if (this.adminAccountService.getAdminAccount()) {
      this.isSuccessfulLogin = true;
      this.accountName = this.adminAccountService.getAdminAccount().accountName;
    }
  }

  login() {
    this.showSpinner = true;
    this.adminAccountService.login(this.accountName, this.password).subscribe((isSuccessful: boolean) => {
      this.showSpinner = false;
      if (isSuccessful) {
        this.isSuccessfulLogin = true;
      } else {
        this.showErrorMessage = true;
      }
    })
  }

  logout() {
    this.adminAccountService.logout();
    this.isSuccessfulLogin = false;
    this.password = '';
  }

  goAdminAccountCreate() {
    this.route.navigate(['/AdminAccountCreate']);
  }
}