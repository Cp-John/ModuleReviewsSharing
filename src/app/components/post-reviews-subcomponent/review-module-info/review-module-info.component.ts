import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-module-info',
  templateUrl: './review-module-info.component.html',
  styleUrls: ['./review-module-info.component.css']
})
export class ReviewModuleInfoComponent implements OnInit {

  public moduleCode: string = '';

  public prof: string = '';

  public acadYear: string = '';

  public moduleInfo: any  = {
    moduleCode: this.moduleCode,
    acadYear: this.acadYear,
    prof: this.prof
  }

  constructor() { }

  ngOnInit(): void {
  }

}
