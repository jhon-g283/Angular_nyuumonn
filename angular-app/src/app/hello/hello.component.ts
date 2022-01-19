// おまじない的なもの、OnInitは初期化系
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title:string;
  message:string;
  // コンストラクタ
  constructor() { }
// インターフェース
  ngOnInit() {
    this.title = 'Hellow-App';
    this.message = 'this is My First Component!!';
  }

}
