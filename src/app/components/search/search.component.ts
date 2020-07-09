import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public enteredModuleCode: String = '';
  public enteredModuleTitle: String = '';
  public enteredProf: String = '';
  public enteredAcadYear: String = '';

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  doSearch() {
    this.route.navigate(['/Module', this.enteredModuleCode]);
  }

}
