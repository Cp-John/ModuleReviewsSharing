import { Injectable } from '@angular/core';
import { Module } from '../module';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class MyModulesService {

  public myModuleList: Module[] = [];

  constructor(public searchService: SearchService) { }

  getMyModuleList() {
    if (this.myModuleList.length == 0) {
      if (localStorage.getItem('myModuleList')) {
        this.myModuleList = JSON.parse(localStorage.getItem('myModuleList'));
      } else {
        this.updateLocalStorage();
      }
    } 
    return this.myModuleList;
  }

  addModule(module: Module) {
    this.myModuleList.push(module);
    this.updateLocalStorage();
  }

  deleteModule(moduleCode: string) {
    this.myModuleList = this.myModuleList.filter((module: Module) => {
      return module.moduleCode != moduleCode;
    })
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('myModuleList', JSON.stringify(this.myModuleList));
  }

}
