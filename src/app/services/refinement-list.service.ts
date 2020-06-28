import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RefinementList } from '../refinementList';

@Injectable({
  providedIn: 'root'
})
export class RefinementListService {

  public refinementList: RefinementList = new RefinementList([], [], ['4 MC'], []);

  public subject = new BehaviorSubject(this.refinementList);

  constructor() { }

  addRefinement(selector: string, refinement: string) {
    if (!this.includes(selector, refinement)) {
      this.refinementList[selector].push(refinement);
      this.subject.next(this.refinementList);
    }
  }

  getRefinementList() {
    return this.subject;
  }

  deleteRefinement(selector: string, refinement: string) {
    this.refinementList[selector].splice(this.refinementList[selector].indexOf(refinement), 1);
    this.subject.next(this.refinementList);
  }

  includes(selector: string, refinement: string) {
    return this.refinementList[selector].includes(refinement);
  }
}
