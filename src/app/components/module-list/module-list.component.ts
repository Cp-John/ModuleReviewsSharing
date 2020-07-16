import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  public widthOfDrawer: string = '40%';
  public widthOfMain: string = '100%';

  public hasBackdrop: boolean = false;

  public status: any = {
    opened: false,
    more: {
      'Faculty': false,
      'Department': false
    }
  }

  public searchInput: string = '';

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      if (data) {
        this.searchInput = data.searchInput;
      }
    })
  }

  updateOpened() {
    this.status.opened = !this.status.opened;
    this.updateWidthOfMain();
  }


  updateMore(more: any) {
    this.status.more = more;
    this.updateWidthOfDrawer(more);
  }

  updateWidthOfDrawer(more: any) {
    if (more['Department']) {
      this.widthOfDrawer = '70%';
      this.hasBackdrop = true;
    } else if (more['Faculty']) {
      this.widthOfDrawer = '45%';
      this.hasBackdrop = true;
    } else {
      this.widthOfDrawer = '40%';
      this.hasBackdrop = false;
    }
  }

  updateWidthOfMain() {
    if (this.status.opened) {
      this.widthOfMain = '60%';
    } else {
      this.widthOfMain = '100%';
    }
  }
}
