import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MycheckHttpService } from '../mycheck-http.service';
import { fromEvent, pipe, filter } from 'rxjs';

@Component({
  selector: 'app-messagehttp',
  templateUrl: './messagehttp.component.html',
  styleUrls: ['./messagehttp.component.css'],
})
export class MessagehttpComponent implements OnInit {
  input: FormControl;
  message: string;
  @ViewChild('btn', { static: true }) btn: ElementRef; //はAngularのstrictNullChecksの設定が必要

  constructor(private service: MycheckHttpService) {}

  ngOnInit(): void {
    // フォーム作成
    this.input = new FormControl('');
    this.message = 'mydata list.';
    const btn = this.btn.nativeElement;

    // fromEvent(btn, 'click').subscribe((event: any) => {
    //   this.doAction();

    // });
    fromEvent<MouseEvent>(btn, 'click')
      .pipe(
        filter((res: MouseEvent, n: number) => {
          console.log(n);
          if (res.shiftKey) {
            // マウスのシフトキーを押しながらだとクリックボタンの挙動をさせない
            return false;
          }
          return true;
        })
      )
      .subscribe((event: MouseEvent) => {
        this.doAction();
      });
  }

  updateData(ck: boolean) {
    this.service.updateData(ck);
  }

  getData() {
    // サービスからjson取得してセット
    return this.service.data;
  }

  getList() {
    // サービスからjson取得してセット
    return this.service.list.map((v) => {
      v.name = '***';
      return v;
    });
  }

  doAction() {
    // フォームから入力された番号を取得して、該当するインデックスのデータを取得
    let n = parseInt(this.input.value);
    let p = this.service.get(n);
    this.message = JSON.stringify(p);
  }
}
