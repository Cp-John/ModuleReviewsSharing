import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

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
    var navigationExtras: NavigationExtras = {
      queryParams: {
        pageIndex: 0
      }
    }
    this.route.navigate(['/LatestPosts'], navigationExtras);
  }

  goMyModules() {
    this.route.navigate(['/MyModules']);
  }
  
  goAdminAccountLogin() {
    this.route.navigate(['/AdminAccountLogin']);
  }
}
