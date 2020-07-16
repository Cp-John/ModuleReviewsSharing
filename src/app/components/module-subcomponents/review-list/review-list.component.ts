import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Module } from '../../../module';
import { ReviewPost } from 'src/app/reviewPost';
import { SearchService } from "../../../services/search.service";
import { PostListService } from "../../../services/post-list.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminAccountService } from 'src/app/services/admin-account.service';

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

  public postListLike: string[] = [];

  public postListDislike: string[] = [];
  
  public hoverOnShareBtn: boolean[];
  
  public hoverOnShareBox: boolean[];

  public isSuccessfulLogin: boolean = false;

  public pageIndex: number = 0;

  constructor(public route: Router,
    public activatedRoute: ActivatedRoute,
    public searchService: SearchService,
    public postListService: PostListService,
    public snackBar: MatSnackBar,
    public adminAccountService: AdminAccountService) { }

  ngOnInit(): void {
    this.updatePostListLikeAndDislike();
    this.resetHoverOn();
    if (this.adminAccountService.getAdminAccount()) {
      this.isSuccessfulLogin = true;
    }
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

  delete(postId: string) {
    this.postListService.getPostList().subscribe((postList: ReviewPost[]) => {
      this.postListService.deletePost(postId).subscribe((postReview: ReviewPost) => {
        this.reviewList = this.reviewList.filter((review: ReviewPost) => {
          return review._id != postId;
        })
        var start = this.pageIndex * 5;
        this.reviewListShown = this.reviewList.slice(start, start + 5);
      })
    })
  }

  updateReviewListShown(event: any) {
    this.pageIndex = event.pageIndex;
    var start = this.pageIndex * 5;
    this.reviewListShown = this.reviewList.slice(start, start + 5);
  }

  updatePostListLikeAndDislike() {
    this.postListLike = this.postListService.getPostListLike();
    this.postListDislike = this.postListService.getPostListDislike();
  }

  onClickLikePost(post: ReviewPost) {
    var postId = post._id;
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
        console.log(this.postListLike);
      })
    }
  }

  onClickDislikePost(post: ReviewPost) {
    var postId = post._id;
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

  onCopyPost(post: ReviewPost, copyContent: string) {
    post.numOfShares++;
    const oInput = document.createElement('textarea');
    var postId = post._id;
    oInput.value = copyContent;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand('Copy');
    oInput.style.display = 'none';
    this.snackBar.open('Review post copied!', '', {
      duration: 2000,
    });
    this.postListService.sharePost(postId).subscribe((post_1: ReviewPost) => {
    });
  } 

  ifLike(postId: string) {
    return this.postListLike.includes(postId);
  }

  ifDislike(postId: string) {
    return this.postListDislike.includes(postId);
  }

  resetHoverOn() {
    this.hoverOnShareBtn = [false, false, false, false, false];
    this.hoverOnShareBox = [false, false, false, false, false];
  }

  mouseLeaveShareBtn(key: number) {
    setTimeout(() => this.hoverOnShareBtn[key] = false, 200);
  }

}
