import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.route.navigate(['/']);
  }

  goModuleList() {
    this.route.navigate(['/ModuleList']);
  }

  goPostReviews() {
    this.route.navigate(['/PostReview']);
  }

  goLatestPosts() {
    this.route.navigate(['/LatestPosts']);
  }

  goMyModules() {
    this.route.navigate(['/MyModules']);
  }

}
