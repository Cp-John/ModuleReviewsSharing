import { Injectable } from '@angular/core';
import { PostListService } from './post-list.service';
import { ReviewPost } from '../reviewPost';
import { Module } from '../module';
import { map } from "rxjs/operators";
import { AverageRatings } from '../averageRatings';

@Injectable({
  providedIn: 'root'
})
export class AverageRatingsService {

  constructor(public postListService: PostListService) { }

  public getAverageRatingsByReviewList(reviewList: ReviewPost[]) {

    var averageRatings = new AverageRatings('0', '0', '0', '0');

    var general = 0;
    var difficulty = 0;
    var workload = 0;
    var recommend = 0;

    if (reviewList.length > 0) {
      reviewList.forEach((review: ReviewPost) => {
        general = general + review.reviewAndRatings.recommend;
        difficulty = difficulty + review.reviewAndRatings.difficulty;
        workload = workload + review.reviewAndRatings.workload;
        recommend = recommend + review.reviewAndRatings.general;
      })

      averageRatings.averageRecommend = (recommend / reviewList.length).toFixed(2);
      averageRatings.averageDifficulty = (difficulty / reviewList.length).toFixed(2);
      averageRatings.averageWorkload = (workload / reviewList.length).toFixed(2);
      averageRatings.averageGeneral = (general / reviewList.length).toFixed(2);
    }

    return averageRatings;
  }

  public getAverageRatingsByModuleCode(moduleCode: string) {
    return this.postListService.getPostListOfModule(moduleCode).pipe(
      map((reviewList: ReviewPost[]) => {
        return this.getAverageRatingsByReviewList(reviewList);
      })
    )
  }
}
