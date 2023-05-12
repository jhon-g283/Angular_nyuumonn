import { Component, OnInit } from '@angular/core';
import { MycheckService2Service } from '../mycheck-service2.service';
import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

interface MyData {
  data: string;
}

@Component({
  selector: 'app-hellohttp',
  templateUrl: './hellohttp.component.html',
  styleUrls: ['./hellohttp.component.css'],
  providers: [MycheckService2Service],
})
export class HellohttpComponent implements OnInit {
  title: string;
  message: string;

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.title = 'Http hello!';
    this.message = 'しばし待たれよ・・・・wait..../';
    // 5秒後にデータを取得する
    setTimeout(() => {
      return this.getData();
    }, 5000);
  }

  getData() {
    // httpでjsonを取得し、プロパティに内容を出力する。
    this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
      this.message = '取得したで！　' + result.data;
    });
  }
}
