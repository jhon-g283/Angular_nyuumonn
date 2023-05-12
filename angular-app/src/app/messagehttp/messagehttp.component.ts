import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MycheckHttpService } from '../mycheck-http.service';

@Component({
  selector: 'app-messagehttp',
  templateUrl: './messagehttp.component.html',
  styleUrls: ['./messagehttp.component.css'],
})
export class MessagehttpComponent implements OnInit {
  input: FormControl;
  message: string;

  constructor(private service: MycheckHttpService) {}

  ngOnInit(): void {
    // フォーム作成
    this.input = new FormControl('');
    this.message = 'mydata list.';
  }

  getData() {
    // サービスからjson取得してセット
    return this.service.data;
  }

  getList() {
    // サービスからjson取得してセット
    return this.service.list;
  }

  doAction() {
    // フォームから入力された番号を取得して、該当するインデックスのデータを取得
    let n = parseInt(this.input.value);
    let p = this.service.get(n);
    this.message = JSON.stringify(p);
  }
}
