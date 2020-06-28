import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RefinementListService } from '../../../services/refinement-list.service';
import { RefinementList } from 'src/app/refinementList';

@Component({
  selector: 'app-refinement-list',
  templateUrl: './refinement-list.component.html',
  styleUrls: ['./refinement-list.component.css']
})
export class RefinementListComponent implements OnInit {

  public refinementList: RefinementList = new RefinementList([], [], [], []);

  public selectorList: any = ['Faculty', 'Department', 'ModuleCredit', 'Level'];

  @Output() sendRefinementList = new EventEmitter();

  constructor(public refinementListService: RefinementListService) { }

  ngOnInit(): void {
    this.refinementListService.getRefinementList().subscribe((refinementList: RefinementList) => {
      this.refinementList = refinementList;
      this.sendRefinementList.emit(this.refinementList);
    });
  }

  deleteRefinement(selector: string, refinement: string) {
    this.refinementListService.deleteRefinement(selector, refinement);
  }
}
