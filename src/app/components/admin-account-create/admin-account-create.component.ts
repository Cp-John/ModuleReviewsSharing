import { Component, OnInit } from '@angular/core';
import { AdminAccountService } from 'src/app/services/admin-account.service';
import { Router } from "@angular/router";
import { AdminAccount } from 'src/app/adminAccount';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-admin-account-create',
  templateUrl: './admin-account-create.component.html',
  styleUrls: ['./admin-account-create.component.css']
})
export class AdminAccountCreateComponent implements OnInit {

  public isSuccessfulLogin: boolean = false;
  public showErrorMessage: boolean = false;
  public newAdminAccount: AdminAccount = new AdminAccount('', '');

  public showSpinner: boolean = false;

  public passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(11),
  ])

  public accountNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ])

  constructor(public adminAccountService: AdminAccountService,
    public route: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.adminAccountService.getAdminAccount()) {
      this.isSuccessfulLogin = true;
    }
  }

  goAdminAccountLogin() {
    this.route.navigate(['/AdminAccountLogin']);
  }

  register() {
    this.adminAccountService.getAdminAccountList().subscribe((adminAccountList: AdminAccount[]) => {
      if (adminAccountList.map((adminAccount: AdminAccount) => adminAccount.accountName).includes(this.newAdminAccount.accountName)) {
        this.showErrorMessage = true;
      } else if (this.newAdminAccount.accountName.length > 2 && this.newAdminAccount.accountName.length < 21 &&
        this.newAdminAccount.password.length > 3 && this.newAdminAccount.password.length < 12) {
        this.adminAccountService.createAccount(this.newAdminAccount).subscribe((adminAccount: AdminAccount) => {
          this.route.navigate(['/AdminAccountLogin']);
          this.snackBar.open('Admin account ' + this.newAdminAccount.accountName + " is successfully registered!", '', {
            duration: 2000
          });
        });
      }
    })
  }
}
