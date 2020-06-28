import { Injectable } from '@angular/core';
import { ModuleListService } from "./module-list.service";
import { RefinementList } from '../refinementList';
import { map } from "rxjs/operators";
import { Module } from "../module";
import { PostListService } from '../services/post-list.service';
import { ReviewPost } from '../reviewPost';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public moduleListService: ModuleListService,
    public postListService: PostListService) { }

  private belongsToFaculty = (module: Module, facultyList: string[]) => {
    var flag = false;
    for (let i = 0; i < facultyList.length; i++) {
      if (module.faculty == facultyList[i]) {
        flag = true;
        break;
      }
    }
    return facultyList.length == 0 || flag;
  }

  private belongsToDepartment(module: Module, departmentList: string[]) {
    var flag = false;
    for (let i = 0; i < departmentList.length; i++) {
      if (module.department == departmentList[i]) {
        flag = true;
        break;
      }
    }
    return departmentList.length == 0 || flag;
  }

  public belongsToLevel(module: Module, levelList: string[]) {
    var flag = false;
    for (let i = 0; i < levelList.length; i++) {
      let level = levelList[i].charAt(0);
      let levelOfModule = module.moduleCode.replace(/^[A-Z]+/, '').charAt(0);
      if (level == levelOfModule) {
        flag = true;
        break;
      }
    }
    return levelList.length == 0 || flag;
  }

  public hasModuleCredit(module: Module, moduleCreditList: string[]) {
    var flag = false;
    for (let i = 0; i < moduleCreditList.length; i++) {
      let moduleCredit = parseInt(module.moduleCredit);
      switch (moduleCreditList[i]) {
        case '0-3 MC': flag = moduleCredit < 4; break;
        case '4 MC': flag = moduleCredit == 4; break;
        case '5-8 MC': flag = moduleCredit < 9 && moduleCredit > 4; break;
        case 'More than 8 MC': flag = moduleCredit > 8; break;
      }
      if (flag) break;
    }
    return moduleCreditList.length == 0 || flag;
  }

  getFullModuleList() {
    return this.moduleListService.getModuleList();
  }

  search(searchInput: string, refinementList: RefinementList) {
    return this.getFullModuleList().pipe(
      map((moduleList: Module[]) => {
        if (refinementList.isEmpty()) {
          return moduleList;
        } else {
          return moduleList.filter((module: Module) => {
            return this.belongsToFaculty(module, refinementList.Faculty) &&
              this.belongsToDepartment(module, refinementList.Department) &&
              this.hasModuleCredit(module, refinementList.ModuleCredit) &&
              this.belongsToLevel(module, refinementList.Level);
          })
        }
      }),
      map((moduleList: Module[]) => {
        if (searchInput == '') {
          return moduleList;
        } else {
          let uppercaseSearchInput = searchInput.toUpperCase();
          return moduleList.filter((module: Module) => {
            let uppercaseModuleTitle = module.title.toUpperCase();
            return uppercaseModuleTitle.search(uppercaseSearchInput) != -1 || module.moduleCode.search(uppercaseSearchInput) != -1;
          });
        }
      })
    );
  }

  getModule(moduleCode: string) {
    return this.getFullModuleList().pipe(
      map((moduleList: Module[]) => {
        let moduleFound: Module;
        for (var i = 0; i < moduleList.length; i++) {
          if (moduleList[i].moduleCode == moduleCode) {
            moduleFound = moduleList[i];
            break;
          }
        }
        return moduleFound;
      })
    )
  }

  getMoreModuleList(moduleCode: String) {
    return this.getFullModuleList().pipe(
      map((moduleList: Module[]) => {
        let index = moduleList.map((module: Module) => {
          return module.moduleCode;
        }).findIndex((item: string) => item == moduleCode);
        let start = index - 5 < 0
          ? 0
          : index + 5 > moduleList.length - 1
            ? moduleList.length - 11
            : index - 5;
        return moduleList.slice(start, start + 11).filter((module: Module) => module.moduleCode != moduleCode);
      })
    )
  }

}
