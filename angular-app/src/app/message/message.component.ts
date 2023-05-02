import { Component, OnInit, Input } from '@angular/core';

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
  @Input() content: string;
  constructor() {}

  ngOnInit(): void {}
}
