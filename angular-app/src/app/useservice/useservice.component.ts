import { Component, OnInit } from '@angular/core';
import { MycheckService } from '../mycheck.service'; //サービスをインポート
import { MycheckService2Service } from '../mycheck-service2.service';
@Component({
  selector: 'app-useservice',
  templateUrl: './useservice.component.html',
  styleUrls: ['./useservice.component.css'],
  //providersでサービスをセットするとこのコンポーネントを読み込むときに独自のインスタンスを作成する
  providers: [MycheckService2Service],
})
export class UseserviceComponent implements OnInit {
  title: string;
  message: string;
  message2: string;
  message3: string;
  message4: string;

  // messageArray: string[];

  //コンストラクタにサービスを引数として追加
  constructor(
    private service: MycheckService,
    private service2: MycheckService2Service
  ) {
    service2.push('hello data');
  }

  ngOnInit(): void {
    this.title = 'use Service!!';
    // Serviceの処理をここで使用する。
    this.message = this.service.hello('Mr.Service '); //引数でサービス利用
    this.message2 = this.service.hello2(); //コンストラクタでサービスのプロパティにセットされたものを利用

    this.message3 =
      '別コンポーネントで作成しておいた同一インスタンスであるサービスからデータサイズを読み込む data size of' +
      this.service2.size;
    this.message4 = '' + this.service2.json;
  }
}
