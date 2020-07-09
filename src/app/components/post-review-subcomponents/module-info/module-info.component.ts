import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Router, NavigationExtras } from '@angular/router';
import { of } from 'rxjs';
import { RefinementList } from '../../../refinementList';
import { Module } from 'src/app/module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-module-info',
  templateUrl: './module-info.component.html',
  styleUrls: ['./module-info.component.css']
})
export class ModuleInfoComponent implements OnInit {

  public prof = '';

  public acadYear = '2019-2020';

  public semester = 'Semester 1';

  public selectedModule: Module;

  public moduleListShown: Module[] = [];

  public searchInput: string = '';

  @Input() moduleCode: any;

  constructor(public searchService: SearchService, public route: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.searchService.search(this.searchInput, RefinementList.emptyRefinementList).subscribe((searchResult: Module[]) => {
      this.moduleListShown = searchResult.slice(0, 10);
    });
    this.searchInput = this.moduleCode;
  }

  select(module: Module) {
    this.selectedModule = module;
    this.searchInput = module.moduleCode;
  }

  goModuleList() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        searchInput: this.searchInput
      }
    }
    this.route.navigate(['./ModuleList'], navigationExtras);
  }

  search() {
    this.searchService.search(this.searchInput, RefinementList.emptyRefinementList).subscribe((searchResult: Module[]) => {
      this.moduleListShown = searchResult.slice(0, 20);
    });
    this.selectedModule = undefined;
  }

  getModule() {
    if (this.selectedModule) {
      return of(this.selectedModule);
    } else {
      return this.searchService.getModule(this.searchInput);
    }
  }

}
