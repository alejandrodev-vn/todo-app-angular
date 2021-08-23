import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
})
export class ButtonAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isShow: boolean = false;
  textBtn: string = 'Add new';
  colorTextBtn: string = 'accent';

  handleClickToDisplay() {
    this.isShow = !this.isShow;
    this.textBtn = !this.isShow ? 'Add new' : 'Hide';
    this.colorTextBtn = !this.isShow ? 'accent' : 'primary';
  }
}
