import { Component, OnInit } from '@angular/core';
import { ReviewAndRatings } from 'src/app/reviewAndRatings';

@Component({
  selector: 'app-review-and-ratings',
  templateUrl: './review-and-ratings.component.html',
  styleUrls: ['./review-and-ratings.component.css']
})
export class ReviewAndRatingsComponent implements OnInit {

  public reviewAndRatings: ReviewAndRatings = new ReviewAndRatings('\nWorkload and Difficulty:\nProf and Teaching method:\nOther complaints and commendations:\n', 5, 5, 5, 5);

  constructor() { }

  ngOnInit(): void {
  }

}
