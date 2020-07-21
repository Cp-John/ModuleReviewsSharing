import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Module } from '../../module';
import { RefinementList } from '../../refinementList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchInput: string = '';

  public selectedModule: Module;

  public moduleListShown: Module[] = [];

  public inputStatus: boolean = false;

  constructor(public route: Router, public searchService: SearchService) { }

  ngOnInit(): void {
    this.search();
  }

  select(module: Module) {
    this.selectedModule = module;
    this.goModule(module.moduleCode);
  }
  
  goModule(moduleCode: string) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
  }

  search() {
    this.searchService.search(this.searchInput, RefinementList.emptyRefinementList).subscribe((searchResult: Module[]) => {
      this.moduleListShown = searchResult.slice(0, 10);
    })
  }

  goModuleList() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        searchInput: this.searchInput
      }
    }
    this.route.navigate(['/ModuleList'], navigationExtras);
  }

  goModuleListWithNoInput() {
    this.route.navigate(['/ModuleList']);
  }

  goPostReviews() {
    this.route.navigate(['/PostReview']);
  }

  goLatestPosts() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        pageIndex: 0
      }
    }
    this.route.navigate(['/LatestPosts'], navigationExtras);
  }

  inputStatusOn() {
    this.inputStatus = true;
  }

}
