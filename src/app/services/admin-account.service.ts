import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AdminAccount } from '../adminAccount';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {

  public cachedAdminAccountList: AdminAccount[] = [];

  public adminAccount: AdminAccount;

  constructor(public http: HttpClient) { }

  getAdminAccount() {
    return this.adminAccount;
  }

  getAdminAccountList() {
    if (this.cachedAdminAccountList.length > 0) {
      return of(this.cachedAdminAccountList);
    } else {
      return this.http.get('/adminAccounts').pipe(
        map((adminAccountList: AdminAccount[]) => {
          this.cachedAdminAccountList = adminAccountList;
          return adminAccountList;
        })
      )
    }
  }

  login(accountName: string, password: string) {
    return this.getAdminAccountList().pipe(
      map((adminAccountList: AdminAccount[]) => {
        var filteredAdminAccountList = adminAccountList.filter((adminAccount: AdminAccount) => {
          return adminAccount.accountName == accountName && adminAccount.password == password;
        });
        if (filteredAdminAccountList.length == 1) {
          this.adminAccount = filteredAdminAccountList[0];
        }
        return filteredAdminAccountList.length == 1;
      })
    )
  }

  logout() {
    this.adminAccount = undefined;
  }

  createAccount(adminAccount: AdminAccount) {
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('/adminAccounts/create', adminAccount, httpOptions);
  }
}
