import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { MyModulesService } from '../../services/my-modules.service';
import { ModuleListService } from '../../services/module-list.service';
import { Module } from 'src/app/module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReviewPost } from "../../reviewPost";
import { PostListService } from '../../services/post-list.service';
import { AverageRatingsService } from '../../services/average-ratings.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  public module: Module = new Module('', '', '', '', '', '', 0);

  public reviewListShown: ReviewPost[] = [];

  public reviewList: ReviewPost[] = [];

  public userName: string = 'Anonymous';

  public activeBtn: string = 'Reviews';

  public averageRatings: any = {
    averageGeneral: 0,
    averageDifficulty: 0,
    averageWorkload: 0,
    averageRecommend: 0,
  };

  public moreModuleList: Module[] = [];

  constructor(public route: Router, 
    public activatedRoute: ActivatedRoute, 
    public searchService: SearchService,
    public myModuleService: MyModulesService,
    public moduleListService: ModuleListService,
    private snackBar: MatSnackBar,
    public postListService: PostListService,
    public averageRatingsService: AverageRatingsService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data: any) => {

      this.searchService.getModule(data.moduleCode).subscribe((module: Module) => {
        this.module = module;
        this.postListService.countPostList(module.moduleCode).subscribe((numOfReviews:number) => {
          this.module.numOfReviews = numOfReviews;
        })
      });

      this.postListService.getPostListOfModule(data.moduleCode).subscribe((postList: ReviewPost[]) => {
        this.reviewList = postList;
        this.averageRatings = this.averageRatingsService.getAverageRatingsByReviewList(this.reviewList);
        this.reviewListShown = this.reviewList.slice(0, 5);
      });

      this.searchService.getMoreModuleList(data.moduleCode).subscribe((moreModuleList: Module[]) => {
        this.moreModuleList = moreModuleList;
      })
    })
  }

  addToMyModules() {
    this.myModuleService.addModule(this.module);
    this.snackBar.open('Successfully added to my modules!', 'Close', {
      verticalPosition: 'top',
      duration: 1000
    });
  }

  addReviews() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: this.module.moduleCode
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

  updateReviewListShown(event: any) {
    var start = event.pageIndex * 5;
    this.reviewListShown = this.reviewList.slice(start, start + 5);
  }

  loadReviewList() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: this.module.moduleCode
      }
    }
    this.activeBtn = 'Reviews';
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
  }

  loadDescription() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: this.module.moduleCode
      }
    }
    this.activeBtn = 'Description';
    this.route.navigate(['/Module/Description'], navigationExtras);
  }

  loadQuestionList() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: this.module.moduleCode
      }
    }
    this.activeBtn = 'Questions';
    this.route.navigate(['/Module/QuestionList'], navigationExtras);
  }

  isReviewsActive() {
    return location.pathname.includes('ReviewList');
  }

  isQuestionsActive() {
    return location.pathname.includes('QuestionList');
  }

  isDescriptionActive() {
    return location.pathname.includes('Description');
  }

}
