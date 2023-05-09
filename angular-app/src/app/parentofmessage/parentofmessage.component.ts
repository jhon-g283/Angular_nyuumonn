import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';

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
  messageArray: string[];
  messageArray2: string[];

  lastTarget: any;
  lastCalor: any;
  input2: string;
  // @ViewChild(MessageComponent)
  @ViewChild('listNgModule') //デコレーションでインポートしてきた子コンポーネントの定義を行う、通常はインポートしたコンポーネント（MessageComponent）でいいが複数回コンポーネントをHTMLで読んでいるのでセレクタとしてIDを入れている。
  private msgComponent: MessageComponent;

  constructor() {}

  // ngOnInit内でプロパティの値を設定
  ngOnInit(): void {
    this.title = 'Hello';
    // this.message = 'this is new Component';
    // メッセージを配列にしてみる。
    this.message = '1,2,3,4,5,6,7';
    this.messageArray = ['A', 'B', 'C', 'D'];
    this.messageArray2 = ['A', 'B', 'C', 'D'];
    this.input2 = '';
  }

  doClick(event: any) {
    console.log('event');
    console.log(event);
    if (this.lastTarget != null) {
      this.lastTarget.style.color = this.lastCalor;
      this.lastTarget.style.backgroundColor = 'white';
    }

    this.lastTarget = event.target; //クリックされた要素
    this.lastCalor = event.target.style.color; //クリックされた要素の色
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'red';
  }

  ngAfterViewInit() {
    console.log('-----');
    console.log(this.msgComponent);
  }

  pushNgModule() {
    // 子コンポーネントの方の関数を実行
    console.log('ngModuleでイベント実施 : ' + this.input2);
    if (this.input2 == '') {
      alert('text is empty!!');
      return;
    }
    console.log(this.msgComponent.pushChildModuleFnc);
    this.msgComponent.pushChildModuleFnc(this.input2);
    this.input2 = '';
  }

  popNgModule() {
    console.log('ngModuleでイベント実施');
    this.msgComponent.popChildModuleFnc();
  }
}
