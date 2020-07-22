import { Injectable } from '@angular/core';
import { ReviewPost } from "../reviewPost";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs";
import { map } from "rxjs/operators";
import { Report } from '../report';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  public cachedPostList: ReviewPost[] = [];

  constructor(public http: HttpClient) { }

  getPostList() {
    if (this.cachedPostList.length > 0) {
      return of(JSON.parse(JSON.stringify(this.cachedPostList)));
    } else {
      return this.http.get('/posts').pipe(
        map((postList: ReviewPost[]) => {
          this.cachedPostList = postList;
          return JSON.parse(JSON.stringify(this.cachedPostList));
        })
      );
    }
  }

  getPostById(postId: string) {
    return this.getPostList().pipe(
      map((postList: ReviewPost[]) => {
        return postList.filter((post: ReviewPost) => post._id == postId)[0];
      })
    )
  } 

  likePost(postId: string) {
    this.getPostList().subscribe((reviewList: ReviewPost[]) => {
      this.cachedPostList.filter((reviewPost: ReviewPost) => reviewPost._id == postId)[0].numOfLikes++;
    })
    var postListLike = this.getPostListLike();
    postListLike.push(postId);
    localStorage.setItem('postListLike', JSON.stringify(postListLike));
    return this.http.put('/posts/like/' + postId, null);
  }

  cancelLikePost(postId: string) {
    this.getPostList().subscribe((reviewList: ReviewPost[]) => {
      this.cachedPostList.filter((reviewPost: ReviewPost) => reviewPost._id == postId)[0].numOfLikes--;
    })
    localStorage.setItem('postListLike', JSON.stringify(this.getPostListLike().filter((id: string) => id != postId)));
    return this.http.put('/posts/like/cancel/' + postId, null);
  }

  dislikePost(postId: string) {
    this.getPostList().subscribe((reviewList: ReviewPost[]) => {
      this.cachedPostList.filter((reviewPost: ReviewPost) => reviewPost._id == postId)[0].numOfDislikes++;
    })
    var postListDislike = this.getPostListDislike();
    postListDislike.push(postId);
    localStorage.setItem('postListDislike', JSON.stringify(postListDislike));
    return this.http.put('/posts/dislike/' + postId, null);
  }

  cancelDislikePost(postId: string) {
    this.getPostList().subscribe((reviewList: ReviewPost[]) => {
      this.cachedPostList.filter((reviewPost: ReviewPost) => reviewPost._id == postId)[0].numOfDislikes--;
    })
    localStorage.setItem('postListDislike', JSON.stringify(this.getPostListDislike().filter((id: string) => id != postId)));
    return this.http.put('/posts/dislike/cancel/' + postId, null);
  }

  sharePost(postId: string) {
    this.getPostList().subscribe((reviewList: ReviewPost[]) => {
      this.cachedPostList.filter((reviewPost: ReviewPost) => reviewPost._id == postId)[0].numOfShares++;
    })
    return this.http.put('/posts/share/' + postId, null);
  }

  getPostListLike() {
    if (!localStorage.getItem('postListLike')) {
      localStorage.setItem('postListLike', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('postListLike'));
  }

  getPostListDislike() {
    if (!localStorage.getItem('postListDislike')) {
      localStorage.setItem('postListDislike', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('postListDislike'));
  }

  countNumOfPosts() {
    return this.http.get('/posts/count');
  }

  deletePost(postId: string) {
    this.cachedPostList = this.cachedPostList.filter((post: ReviewPost) => {
      return post._id != postId;
    })
    return this.http.delete('posts/delete/' + postId);
  }

  addPost(post: ReviewPost) {
    var httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post('/posts', post, httpOptions).pipe(
      map((reviewPost: ReviewPost) => {
        reviewPost.reportList = [];
        this.cachedPostList.push(reviewPost);
        return reviewPost;
      })
    );
  }

  countPostList(moduleCode: string) {
    return this.http.get('/posts/' + moduleCode + '/count');
  }

  getPostListOfModule(moduleCode: string) {
    return this.http.get('/posts/' + moduleCode);
  }

  addReport(report: Report) {
    this.getPostList().subscribe((postList: ReviewPost[]) => {
      var post = this.cachedPostList.find((reviewPost: ReviewPost) => reviewPost._id == report.postId);
      if (post) {
        post.reportList.push(report);
      }
    })
  }

  deleteReport(postId: string) {
    this.getPostList().subscribe((postList: ReviewPost[]) => {
      var post = this.cachedPostList.find((reviewPost: ReviewPost) => reviewPost._id == postId);
      if (post) {
        post.reportList = [];
      }
    })
  }
}
