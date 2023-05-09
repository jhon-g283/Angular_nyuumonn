import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.service'; //サービスをインポート

@Component({
  selector: 'app-useservice',
  templateUrl: './useservice.component.html',
  styleUrls: ['./useservice.component.css'],
})
export class UseserviceComponent implements OnInit {
  title: string;
  message: string;
  message2: string;

  // messageArray: string[];

  //コンストラクタにサービスを引数として追加
  constructor(private service: MycheckService) {}

  ngOnInit(): void {
    this.title = 'use Service!!';
    // Serviceの処理をここで使用する。
    this.message = this.service.hello('Mr.Service '); //引数でサービス利用
    this.message2 = this.service.hello2(); //コンストラクタでサービスのプロパティにセットされたものを利用

    // this.messageArray = ['A', 'B', 'C', 'D'];
  }
}
