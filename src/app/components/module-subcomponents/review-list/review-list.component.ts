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
        this.reviewList = reviewList.reverse();
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

  onClickLikePost(post: ReviewPost) {
    var postId = post.id;
    if (this.postListDislike.includes(postId)) {
      post.numOfDislikes--;
      post.numOfLikes++;
      this.postListService.cancelDislikePost(postId).subscribe((post_1: ReviewPost) => {
        this.postListService.likePost(postId).subscribe((post_2: ReviewPost) => {
          this.updatePostListLikeAndDislike();
          
        });
      });
    } else if (!this.postListLike.includes(postId)) {
      post.numOfLikes++;
      this.postListService.likePost(postId).subscribe((post: ReviewPost) => {
        this.updatePostListLikeAndDislike();
      });
    } else {
      post.numOfLikes--;
      this.postListService.cancelLikePost(postId).subscribe((post: ReviewPost) => {
        this.updatePostListLikeAndDislike();
      })
    }
  }

  onClickDislikePost(post: ReviewPost) {
    var postId = post.id;
    if (this.postListLike.includes(postId)) {
      post.numOfLikes--;
      post.numOfDislikes++;
      this.postListService.cancelLikePost(postId).subscribe((post_1: ReviewPost) => {
        this.postListService.dislikePost(postId).subscribe((post_2: ReviewPost) => {
          this.updatePostListLikeAndDislike();
        });
      });
    } else if (!this.postListDislike.includes(postId)) {
      post.numOfDislikes++;
      this.postListService.dislikePost(postId).subscribe((post_2: ReviewPost) => {
        this.updatePostListLikeAndDislike();
      });
    } else {
      post.numOfDislikes--;
      this.postListService.cancelDislikePost(postId).subscribe((post: ReviewPost) => {
        this.updatePostListLikeAndDislike();
      })
    }
  }

  onClickSharePost(post: ReviewPost) {
    var postId = post.id;
    post.numOfShares++;
    this.postListService.sharePost(postId).subscribe((post_1: ReviewPost) => {
    });
  } 

  ifLike(postId: number) {
    return this.postListLike.includes(postId);
  }

  ifDislike(postId: number) {
    return this.postListDislike.includes(postId);
  }
}
