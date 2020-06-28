import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { PostListService } from '../../services/post-list.service';
import { Module } from '../../module';
import { ReviewPost } from 'src/app/reviewPost';

@Component({
  selector: 'app-data-collected',
  templateUrl: './data-collected.component.html',
  styleUrls: ['./data-collected.component.css']
})
export class DataCollectedComponent implements OnInit {

  public numberOfModules: number = 0;
  public numberOfReviews: number = 0;

  constructor(public searchService: SearchService, public postListService: PostListService) { }

  ngOnInit(): void {
    this.searchService.getFullModuleList().subscribe((moduleList: Module[]) => {
      this.numberOfModules = moduleList.length;
    })

    this.postListService.getPostList().subscribe((postList: ReviewPost[]) => {
      this.numberOfReviews = postList.length;
    })
  }
}
