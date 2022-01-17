import { Component } from '@angular/core';

// デコレータで属性を設定
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//タグを指定
  styleUrls: ['./app.component.css']//スタイルを指定
})

// AppComponentとしてエクスポート
export class AppComponent {
  title = 'angular-app';
}
