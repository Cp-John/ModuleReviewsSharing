import { Component, OnInit, ViewChild } from '@angular/core';
import { PostListService } from '../../services/post-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { ReviewPost } from 'src/app/reviewPost';
import { ModuleInfo } from '../../moduleInfo';
import { Module } from '../../module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {

  @ViewChild('ModuleInfo') ModuleInfo: any;
  @ViewChild('ExtraInfo') ExtraInfo: any;
  @ViewChild('ReviewAndRatings') ReviewAndRatings: any;

  public reviewPost: ReviewPost;

  public moduleCode: string = '';

  constructor(public postListService: PostListService,
    public route: Router,
    public activatedRoute: ActivatedRoute,
    public searchService: SearchService,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      if (data.moduleCode) {
        this.moduleCode = data.moduleCode;
      }
    })
  }

  onSubmit() {
    this.ModuleInfo.getModule().subscribe((module: Module) => {
      if (module) {
        var moduleInfo = new ModuleInfo(module.moduleCode, module.title, this.ModuleInfo.prof, this.ModuleInfo.acadYear, this.ModuleInfo.semester);
        this.postListService.countNumOfPosts().subscribe((numOfPosts: number) => {
          this.reviewPost = new ReviewPost(
            moduleInfo,
            this.ReviewAndRatings.reviewAndRatings,
            this.ExtraInfo.extraInfo,
            new Date().toLocaleDateString(),
            new Date().toTimeString().slice(0, 8),
            numOfPosts
          );
          this.postListService.addPost(this.reviewPost).subscribe((post: ReviewPost) => {
            this.route.navigate(['/LatestPosts']);
          });
        })
      } else {
        this.snackBar.open('Please choose a valid module!', 'Close', {
          verticalPosition: 'top',
          duration: 2000
        })
      }
    });
  }

}
