import { Component, OnInit } from '@angular/core';
import { PostListService } from '../../services/post-list.service';
import { ReviewPost } from 'src/app/reviewPost';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  public postList: ReviewPost[] = [];

  public postListShown: ReviewPost[] = [];

  public userName: string = "Anonymous";

  public postListLike: number[] = [];

  public postListDislike: number[] = [];

  constructor(public postListService: PostListService, public route: Router) { }

  ngOnInit(): void {
    this.postListService.getPostList().subscribe((postList: ReviewPost[]) => {
      this.postList = postList.reverse();
      this.postListShown = postList.slice(0, 5);
    });

    this.updatePostListLikeAndDislike();
  }

  goModule(moduleCode: String) {
    var navigationExtras: NavigationExtras = {
      queryParams: {
        moduleCode: moduleCode
      }
    }
    this.route.navigate(['/Module/ReviewList'], navigationExtras);
  }

  updatePostListShown(event: any) {
    var start = event.pageIndex * 5;
    this.postListShown = this.postList.slice(start, start + 5);
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
