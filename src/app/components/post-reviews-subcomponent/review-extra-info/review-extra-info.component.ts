import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-extra-info',
  templateUrl: './review-extra-info.component.html',
  styleUrls: ['./review-extra-info.component.css']
})
export class ReviewExtraInfoComponent implements OnInit {

  public expectedGrade = '';
  public gradeObtained = '';

  public extraInfo: any = {
    expectedGrade: this.expectedGrade,
    gradeObtained: this.gradeObtained
  }


  constructor() { }

  ngOnInit(): void {
  }

}
