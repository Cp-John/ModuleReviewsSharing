import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Module } from '../../../module';
import { ReviewPost } from 'src/app/reviewPost';
import { SearchService } from "../../../services/search.service";
import { PostListService } from "../../../services/post-list.service";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  public module: Module = new Module('', '', '', '', '', '', 0);

  public reviewList: ReviewPost[] = [];

  public reviewListShown: ReviewPost[] = [];

  public userName: string = 'Anonymous';

  public postListLike: number[] = [];

  public postListDislike: number[] = [];

  constructor(public route: Router,
    public activatedRoute: ActivatedRoute,
    public searchService: SearchService,
    public postListService: PostListService) { }

  ngOnInit(): void {
    this.updatePostListLikeAndDislike();
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.searchService.getModule(data.moduleCode).subscribe((module: Module) => {
        this.module = module;
      })

      this.postListService.getPostListOfModule(data.moduleCode).subscribe((reviewList: ReviewPost[]) => {
        this.reviewList = reviewList;
        this.reviewListShown = this.reviewList.slice(0, 5);
      })
    })
  }

  addReviews() {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: this.module.moduleCode
      }
    }
    this.route.navigate(['/PostReview'], navigationExtras);
  }

  updateReviewListShown(event: any) {
    var start = event.pageIndex * 5;
    this.reviewListShown = this.reviewList.slice(start, start + 5);
  }

  updatePostListLikeAndDislike() {
    this.postListLike = this.postListService.getPostListLike();
    this.postListDislike = this.postListService.getPostListDislike();
  }

  onClickLikePost(postId: number) {
    if (this.postListDislike.includes(postId)) {
      this.postListService.cancelDislikePost(postId);
      this.postListService.likePost(postId);
      this.updatePostListLikeAndDislike();
    } else if (!this.postListLike.includes(postId)) {
      this.postListService.likePost(postId);
      this.updatePostListLikeAndDislike();
    }
  }

  onClickDislikePost(postId: number) {
    if (this.postListLike.includes(postId)) {
      this.postListService.cancelLikePost(postId);
      this.postListService.dislikePost(postId);
      this.updatePostListLikeAndDislike();
    } else if (!this.postListDislike.includes(postId)) {
      this.postListService.dislikePost(postId);
      this.updatePostListLikeAndDislike();
    }
  }

  onClickSharePost(postId: number) {
    this.postListService.sharePost(postId);
  } 

  ifLike(postId: number) {
    return this.postListLike.includes(postId);
  }

  ifDislike(postId: number) {
    return this.postListDislike.includes(postId);
  }

}
