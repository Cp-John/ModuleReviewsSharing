import { Component, OnInit } from '@angular/core';
import { AdminAccountService } from 'src/app/services/admin-account.service';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { Report } from 'src/app/report';
import { ReportListService } from 'src/app/services/report-list.service';
import { ReviewPost } from 'src/app/reviewPost';
import { PostListService } from 'src/app/services/post-list.service';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-admin-account-login',
  templateUrl: './admin-account-login.component.html',
  styleUrls: ['./admin-account-login.component.css']
})
export class AdminAccountLoginComponent implements OnInit {

  public password: string = '';

  public accountName: string = '';

  public showSpinner: boolean = false;

  public showErrorMessage: boolean = false;

  public isSuccessfulLogin: boolean = false;

  public reportList: Report[] = [];

  public report: Report = new Report('', '', '', '');

  public post: ReviewPost;

  public pageIndex: number = 0;

  public postListLike: string[] = [];

  public postListDislike: string[] = [];

  public userName: string = 'Anonymous';

  public hoverOnShareBtn: boolean = false;
  
  public hoverOnShareBox: boolean = false;

  constructor(public adminAccountService: AdminAccountService, 
    public route: Router, 
    public postListService: PostListService, 
    public activatedRoute: ActivatedRoute,
    public snackBar: MatSnackBar,
    public reportListService: ReportListService) { }

  ngOnInit(): void {
    if (this.adminAccountService.getAdminAccount()) {
      this.isSuccessfulLogin = true;
      this.accountName = this.adminAccountService.getAdminAccount().accountName;
    }
    this.reportListService.getReportList().subscribe((reportList: Report[]) => {
      this.reportList = reportList;
      this.updateReportShown();
      console.log(this.report);
    })
  }

  login() {
    this.showSpinner = true;
    this.adminAccountService.login(this.accountName, this.password).subscribe((isSuccessful: boolean) => {
      this.showSpinner = false;
      if (isSuccessful) {
        this.isSuccessfulLogin = true;
      } else {
        this.showErrorMessage = true;
      }
    })
  }

  logout() {
    this.adminAccountService.logout();
    this.isSuccessfulLogin = false;
    this.password = '';
  }

  goAdminAccountCreate() {
    this.route.navigate(['/AdminAccountCreate']);
  }

  deleteReport(reportId: string) {
    console.log(this.report);
    this.reportListService.deleteReport(reportId).subscribe((report: Report) => {
      this.reportList = this.reportList.filter((report: Report) => {
        return report._id != reportId;
      })
      if (this.post) {
        this.postListService.deleteReport(this.post._id);
      }
      this.updateReportShown();
      this.snackBar.open('Report successfully deleted!', '', {
        duration: 2000
      })
    })
  }

  deletePost(reportId: string) {
    this.postListService.getPostList().subscribe((postList: ReviewPost[]) => {
      this.postListService.deletePost(this.post._id).subscribe((reviewPost: ReviewPost) => {
        this.deleteReport(reportId);
      })
    })
  }

  goModule(moduleCode: String) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
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

  updateReportShown() {
    if (this.reportList[this.pageIndex]) {
      this.report = this.reportList[this.pageIndex];
      this.postListService.getPostById(this.reportList[this.pageIndex].postId).subscribe((post: ReviewPost) => {
        this.post = post;
      })
    } else {
      this.post = undefined;
    }
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.updateReportShown();
  }
}