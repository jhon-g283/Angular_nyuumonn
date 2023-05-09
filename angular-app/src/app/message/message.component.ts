import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // HTMLから参照するためのセレクタ
  selector: 'app-message',

  // テンプレートファイルとして使用するHTML、
  templateUrl: './message.component.html',
  // tenmplate:<タグ></タグ>で直接タグ構造を作成することも可能

  // スタイルの参照先
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  public _content: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  // アクセサ
  @Input()
  set content(msg: string) {
    this._content = msg.split(',');
  }
  get content() {
    return this._content.join(',');
  }

  @Input() content2: string[];

  @Input() content3: string[];

  @Output() action = new EventEmitter<MouseEvent>(); //EventEmitter準備

  doClick() {
    this._content.pop();
  }

  // EventEmitterを使用して親コンポーネントから渡されたイベントを実行する
  doAction(event: any) {
    console.log('doAction event');
    console.log(event);
    this.action.emit(event);
  }

  push(item: string) {
    console.log('子コンポ側のイベント関数をID指定で実行 : ' + item);

    this.content2.push(item); //配列に追加
  }

  pushChildModuleFnc(item: string) {
    console.log('親コンポのイベント関数を実行 : ' + item);
    this.content3.push(item); //配列に追加
  }

  pop() {
    console.log('子コンポ側のイベント関数をID指定で実行');
    this.content2.pop();
  }

  popChildModuleFnc() {
    console.log('親コンポのイベント関数を実行 : ');
    this.content3.pop(); //配列に追加
  }
}
