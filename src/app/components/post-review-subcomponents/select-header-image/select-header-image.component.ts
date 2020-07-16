import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-header-image',
  templateUrl: './select-header-image.component.html',
  styleUrls: ['./select-header-image.component.css']
})
export class SelectHeaderImageComponent implements OnInit {

  public pictureUrlList: string[] = [
    'https://material.angular.io/assets/img/examples/shiba1.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3069956775,2485973497&fm=15&gp=0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594804199778&di=a052d594f7559f3dab2201f55fd154de&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Def26c03622381f309e198da199014c67%2Fc1bedafcc3cec3fd8d0a557bdc88d43f87942730.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594804315629&di=c6a60eeb5e72af674d14ea669b81f074&imgtype=0&src=http%3A%2F%2Fimg.91huoke.com%2Fxxfl%2Fhk91%2Fcustomer%2F32671%2FIx4d5bWEZxQ5euqcljDfwKaE3F7GUbbEgWlYwrRJ.jpeg'
  ]

  public selectedHeaderImage: string = this.pictureUrlList[0];

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(url: string) {
    this.selectedHeaderImage = url;
  }

}
