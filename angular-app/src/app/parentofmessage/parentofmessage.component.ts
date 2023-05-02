import { Component, OnInit } from '@angular/core';

// messageコンポーネントを読み込む用のコンポーネント
@Component({
  selector: 'app-parentofmessage',
  templateUrl: './parentofmessage.component.html',
  styleUrls: ['./parentofmessage.component.css'],
})
export class ParentofmessageComponent implements OnInit {
  // プロパティの設定
  title: string;
  message: string;
  constructor() {}

  // ngOnInit内でプロパティの値を設定
  ngOnInit(): void {
    this.title = 'Hello';
    this.message = 'this is new Component';
  }
}
