import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { PostListService } from '../../../services/post-list.service';
import { Router, NavigationExtras } from '@angular/router';
import { RefinementList } from '../../../refinementList';
import { Module } from '../../../module';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  public refinementList: RefinementList = new RefinementList([], [], [], []);

  public selectorList: any = ['Faculty', 'Department', 'ModuleCredit', 'Level'];

  public searchInput: string = '';

  public prof: string = '';

  public acadYear: string = '';

  public filteredModuleList: Module[] = [];

  public moduleListShown: Module[] = [];

  public sortOption: string = 'moduleCode';

  public showSpinner: boolean = false;

  @Input('searchInput') searchInputFromFather: string;

  constructor(public searchService: SearchService,
    public route: Router,
    public postListService: PostListService) { }

  ngOnInit(): void {
    if (this.searchInputFromFather) {
      this.searchInput = this.searchInputFromFather;
    }
    this.showSpinner = true;
    this.search();
  }

  sortFilteredModuleList() {
    this.filteredModuleList.sort(this.getSortMethod(this.sortOption));
    this.moduleListShown = this.filteredModuleList.slice(0, 15);
    this.updateNumOfReviews();
  }

  getSortMethod(key: string) {
    if (key == 'moduleCredit') {
      return (a: Module, b: Module) => {
        return parseInt(a[key]) > parseInt(b[key]) ? 1 : -1;
      }
    } else {
      return (a: Module, b: Module) => {
        return a[key] > b[key] ? 1 : -1;
      }
    }
  }

  updateNumOfReviews() {
    var arrOfCountRes = [];
    this.moduleListShown.forEach((module: Module) => {
      arrOfCountRes.push(this.postListService.countPostList(module.moduleCode));
    })
    forkJoin(arrOfCountRes).subscribe((listOfNumOfReviews: number[]) => {
      this.moduleListShown.forEach((module: Module, index: number) => {
        module.numOfReviews = listOfNumOfReviews[index];
      })
    })
  }

  goPostReviews(moduleCode: string) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/PostReview'], navigationExtras);
  }

  goModule(moduleCode: string) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
  }

  updateRefinementList(refinementList: RefinementList) {
    this.refinementList = refinementList;
    this.search();
  }

  search() {
    this.searchService.search(this.searchInput, this.refinementList).subscribe((searchResult: Module[]) => {
      this.showSpinner = false;
      this.filteredModuleList = searchResult;
      this.moduleListShown = this.filteredModuleList.slice(0, 15);
      this.filteredModuleList.forEach((module: Module) => {
        module.numOfReviews = 0;
      })
      this.updateNumOfReviews();
      this.sortFilteredModuleList();
    });
  }

  reverseFilteredModuleList() {
    this.filteredModuleList = this.filteredModuleList.reverse()
    this.moduleListShown = this.filteredModuleList.slice(0, 15);
    this.updateNumOfReviews();
  }

  updateModuleListShown(event: any) {
    var start = event.pageIndex * 15;
    this.moduleListShown = this.filteredModuleList.slice(start, start + 15);
  }
}
