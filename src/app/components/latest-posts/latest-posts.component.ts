import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../services/post-list.service';
import { ReviewPost } from 'src/app/reviewPost';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { AdminAccountService } from 'src/app/services/admin-account.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  public postList: ReviewPost[] = [];

  public postListShown: ReviewPost[] = [];

  public userName: string = "Anonymous";

  public postListLike: string[] = [];

  public postListDislike: string[] = [];

  public hoverOnShareBtn: boolean[];
  
  public hoverOnShareBox: boolean[];

  public isSuccessfulLogin: boolean = false;

  public pageIndex: number = 0;


  constructor(public postListService: PostListService, 
    public route: Router, 
    public snackBar: MatSnackBar,
    public adminAccountService: AdminAccountService,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetHoverOn();
    this.activatedRoute.queryParams.subscribe((data) => {
      if (data.pageIndex) {
        this.pageIndex = data.pageIndex;
      }
      var start = this.pageIndex * 5;
      this.postListService.getPostList().subscribe((postList: ReviewPost[]) => {
        this.postList = postList.reverse();
        this.postListShown = postList.slice(start, start + 5);
      });
    })
    this.updatePostListLikeAndDislike();
    if (this.adminAccountService.getAdminAccount()) {
      this.isSuccessfulLogin = true;
    }
  }

  goModule(moduleCode: String) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
  }

  goReport(postId: string) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        postId: postId
      }
    }
    this.route.navigate(['/Report'], navigationExtras);
  }

  resetHoverOn() {
    this.hoverOnShareBtn = [false, false, false, false, false];
    this.hoverOnShareBox = [false, false, false, false, false];
  }

  updatePostListShown(event: any) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        pageIndex: event.pageIndex
      }
    }
    this.route.navigate(['/LatestPosts'], navigationExtras);
  }

  delete(postId: string) {
    this.postListService.getPostList().subscribe((postList: ReviewPost[]) => {
      this.postListService.deletePost(postId).subscribe((reviewPost: ReviewPost) => {
        this.postList = this.postList.filter((reviewPost: ReviewPost) => {
          return reviewPost._id != postId;
        });
        var start = this.pageIndex * 5;
        this.postListShown = this.postList.slice(start, start + 5);
      })
    })
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
    oInput.value = copyContent + '\n@ModuleReviewsSharing';
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

  mouseLeaveShareBtn(key: number) {
    setTimeout(() => this.hoverOnShareBtn[key] = false, 200);
  }

}
