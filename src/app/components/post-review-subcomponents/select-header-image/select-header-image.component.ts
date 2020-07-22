import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-header-image',
  templateUrl: './select-header-image.component.html',
  styleUrls: ['./select-header-image.component.css']
})
export class SelectHeaderImageComponent implements OnInit {

  public pictureUrlList: string[] = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595419668375&di=ac012aaac7cf0dbe4f5ab7f1bbb46ec1&imgtype=0&src=http%3A%2F%2Fwww.petmrs.com%2Fuploads%2Fallimg%2F140804%2F3-140P4164156.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3069956775,2485973497&fm=15&gp=0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595419247440&di=2433556b58d8ec2827761fa3b1e531d6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181206%2F8a216edd6e7f4be199c154d3fcb8041c.jpeg',
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
