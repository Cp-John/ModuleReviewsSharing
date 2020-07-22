import { Component, OnInit } from '@angular/core';
import { ReviewPost } from 'src/app/reviewPost';
import { PostListService } from 'src/app/services/post-list.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Report } from 'src/app/report';
import { ReportListService } from 'src/app/services/report-list.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public postId: string = '';

  public post: ReviewPost;

  public isNotFound: boolean = false;

  public hoverOnShareBtn: boolean = false;
  
  public hoverOnShareBox: boolean = false;

  public userName: string = 'Anonymous';

  public postListLike: string[] = [];

  public postListDislike: string[] = [];

  public content: string = '';

  constructor(public postListService: PostListService, 
    public activatedRoute: ActivatedRoute,
    public route: Router,
    public snackBar: MatSnackBar,
    public reportListService: ReportListService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.postId = data.postId;
      this.postListService.getPostById(this.postId).subscribe((post: ReviewPost) => {
        this.post = post;
      })
      this.updatePostListLikeAndDislike();
      if (!this.post) {
        this.isNotFound = true;
      }
    })
  }

  onSubmitReport() {
    var newReport = new Report(
      this.content, 
      new Date().toLocaleDateString(),
      new Date().toTimeString().slice(0, 8),
      this.postId);
    this.postListService.addReport(newReport);
    this.reportListService.submitReport(newReport).subscribe((report: Report) => {
      this.route.navigate(['/LatestPosts']);
      this.snackBar.open('Thank you for your report! We\'ll deal with it as soon as possible.', '', {
        duration: 2000
      })
    });
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

  mouseLeaveShareBtn() {
    setTimeout(() => this.hoverOnShareBtn = false, 200);
  }
}
