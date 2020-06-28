import { Injectable } from '@angular/core';
import { ReviewPost } from "../reviewPost";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  public cachedPostList: ReviewPost[] = [];

  constructor(public http: HttpClient) { }

  getPostList() {
    if (this.cachedPostList.length > 0) {
      return of(this.cachedPostList);
    } else {
      return this.http.get('/posts').pipe(
        map((postList: ReviewPost[]) => {
          this.cachedPostList = postList.reverse();
          return this.cachedPostList;
        })
      );
    }
  }

  likePost(postId: number) {
    var postListLike = this.getPostListLike();
    postListLike.push(postId);
    localStorage.setItem('postListLike', JSON.stringify(postListLike));
    return this.http.put('/posts/like/' + postId, null);
  }

  cancelLikePost(postId: number) {
    localStorage.setItem('postListLike', JSON.stringify(this.getPostListLike().filter((id: number) => id != postId)));
    return this.http.put('/posts/like/cancel/' + postId, null);
  }

  dislikePost(postId: number) {
    var postListDislike = this.getPostListDislike();
    postListDislike.push(postId);
    localStorage.setItem('postListDislike', JSON.stringify(postListDislike));
    return this.http.put('/posts/dislike/' + postId, null);
  }

  cancelDislikePost(postId: number) {
    localStorage.setItem('postListDislike', JSON.stringify(this.getPostListDislike().filter((id: number) => id != postId)));
    return this.http.put('/posts/dislike/cancel/' + postId, null);
  }

  sharePost(postId: number) {
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

  addPost(post: ReviewPost) {
    this.getPostList().subscribe((postList: ReviewPost[]) => {
      this.cachedPostList.unshift(post);
    })
    var httpOptions = { 
      headers: new HttpHeaders({"Content-Type": "application/json"}) 
    };
    return this.http.post('/posts', post, httpOptions);
  }

  countPostList(moduleCode: string) {
    return this.http.get('/posts/' + moduleCode + '/count');
  }

  getPostListOfModule(moduleCode: string) {
    return this.http.get('/posts/' + moduleCode);
  }
}
