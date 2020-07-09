import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-and-ratings',
  templateUrl: './review-and-ratings.component.html',
  styleUrls: ['./review-and-ratings.component.css']
})
export class ReviewAndRatingsComponent implements OnInit {

  public difficulty = 5;
  public workload = 5;
  public general = 5;
  public recommend = 5;

  public review = '';

  public reviewAndRatings = {
    difficulty: this.difficulty,
    workload: this.workload,
    general: this.general,
    recommend: this.recommend,
    review: this.review
  }

  constructor() { }

  ngOnInit(): void {
  }

}
