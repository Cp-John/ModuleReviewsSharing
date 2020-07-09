import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-reviews',
  templateUrl: './post-reviews.component.html',
  styleUrls: ['./post-reviews.component.css']
})

export class PostReviewsComponent implements OnInit {
  @ViewChild('review-extra-info') ExtraInfo: any;
  @ViewChild('review-module-info') ModuleInfo: any;
  @ViewChild('review-and-ratings') ReviewAndRatings: any;

  public reviewPost: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.reviewPost = {
      moduleInfo: this.ModuleInfo.moduleInfo,
      reviewAndRatings: this.ReviewAndRatings.reviewAndRatings,
      extraInfo: this.ExtraInfo.extraInfo,
    }
    console.log(this.reviewPost);
  }

}
