// おまじない的なもの、OnInitは初期化系
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  // 変数の宣言
  title:string;
  message:string;
  price:number;
  now:Date;//日付
  styleClass:string;//バインド用のクラス名

  // コンストラクタ
  constructor() { 
    // 1sごとに処理実施
    setInterval(()=>{this.now = new Date();},1000)


  }
// インターフェース
  ngOnInit() {
    this.title = 'Hellow-App';
    this.message = 'this is My First Component!!';
    this.price=1123450;
    this.styleClass="red";//赤にする
  }

  // あらかじめ用意した関数をhtml内の{{}}で表示
  today(){
    return new Date().toLocaleString();
  }
  today2(){

    return this.now.toLocaleString();
  }

}
