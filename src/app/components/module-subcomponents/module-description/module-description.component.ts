import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/module';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { SearchService } from "../../../services/search.service";

@Component({
  selector: 'app-module-description',
  templateUrl: './module-description.component.html',
  styleUrls: ['./module-description.component.css']
})
export class ModuleDescriptionComponent implements OnInit {

  public module: Module = new Module('', '', '', '', '', '', 0);

  public description: string = '';

  constructor(public activatedRoute: ActivatedRoute, 
    public http: HttpClient,
    public searchService: SearchService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.searchService.getModule(data.moduleCode).subscribe((module: Module) => {
        this.module = module;
        this.description = this.module.description;
        document.getElementsByTagName('a')[0].
        setAttribute('href', 'https://nusmods.com/modules/' + this.module.moduleCode + '/' + this.module.title)
      })
    })
  }

}
