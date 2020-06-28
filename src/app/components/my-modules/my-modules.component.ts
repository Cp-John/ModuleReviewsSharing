import { Component, OnInit } from '@angular/core';
import { MyModulesService } from '../../services/my-modules.service';
import { Router, NavigationExtras } from '@angular/router';
import { Module } from 'src/app/module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostListService } from "../../services/post-list.service";
import { AverageRatingsService } from "../../services/average-ratings.service";
import { AverageRatings } from 'src/app/averageRatings';

@Component({
  selector: 'app-my-modules',
  templateUrl: './my-modules.component.html',
  styleUrls: ['./my-modules.component.css']
})
export class MyModulesComponent implements OnInit {

  public myModuleList: Module[] = [];

  public listOfAverageRatings: any[] = [];

  public listOfNumOfReviews: number[] = [];

  constructor(public myModulesService: MyModulesService,
    public route: Router,
    private snackBar: MatSnackBar,
    public postListService: PostListService,
    public averageRatingsService: AverageRatingsService) { }

  ngOnInit(): void {
    this.myModuleList = this.myModulesService.getMyModuleList();
    this.myModuleList.forEach((module: Module) => {
      this.listOfNumOfReviews.push(0);
      this.listOfAverageRatings.push(AverageRatings.emptyAverageRatings);
    })
    this.myModuleList.forEach((module: Module, index: number) => {
      this.postListService.countPostList(module.moduleCode).subscribe((numOfReviews: number) => {
        this.listOfNumOfReviews[index] = numOfReviews;
      })
    })
    this.myModuleList.forEach((module: Module, index: number) => {
      this.averageRatingsService.getAverageRatingsByModuleCode(module.moduleCode).subscribe((averageRatings: any) => {
        this.listOfAverageRatings[index] = averageRatings;
      })
    })
  }

  goModule(moduleCode: string) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
  }

  deleteModule(moduleCode: string) {
    this.myModulesService.deleteModule(moduleCode);
    this.myModuleList = this.myModulesService.getMyModuleList();
    this.snackBar.open('Successfully deleted from my modules!', 'Close', {
      verticalPosition: 'top',
      duration: 1000
    });
  }

  goModuleList() {
    this.route.navigate(['ModuleList']);
  }

}
