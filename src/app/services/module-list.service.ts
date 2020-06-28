import { Injectable } from '@angular/core';
import { Module } from '../module';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PostListService } from '../services/post-list.service'

@Injectable({
  providedIn: 'root'
})
export class ModuleListService {

  public cachedModuleList: Module[] = [];

  constructor(public http: HttpClient, public postListService: PostListService) { }

  updateLocalStorage() {
    this.http.get('/modules').subscribe((moduleList: Module[]) => {
      localStorage.setItem('moduleList', JSON.stringify(moduleList));
      this.cachedModuleList = moduleList;
    });
  }

  getModuleList() {
    if (this.cachedModuleList.length > 0) {
      return of(this.cachedModuleList);
    } else if (localStorage.getItem('moduleList')) {
      this.cachedModuleList = JSON.parse(localStorage.getItem('moduleList'));
      return of(this.cachedModuleList);
    } else {
      this.updateLocalStorage();
      return this.http.get('/modules');
    }
  }
}
