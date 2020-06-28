import { Component, OnInit } from '@angular/core';
import { ExtraInfo } from 'src/app/extraInfo';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css']
})
export class ExtraInfoComponent implements OnInit {

  public extraInfo: ExtraInfo = new ExtraInfo('', '');

  constructor() { }

  ngOnInit(): void {
  }

}
