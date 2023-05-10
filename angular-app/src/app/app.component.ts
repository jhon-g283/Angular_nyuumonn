import { Component } from '@angular/core';
import { Router } from '@angular/router';
// デコレータで属性を設定
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //タグを指定
  styleUrls: ['./app.component.css'], //スタイルを指定
})

// AppComponentとしてエクスポート
export class AppComponent {
  title = 'angular-app';

  constructor(private router: Router) {}

  doClick() {
    this.router.navigate(['']); //touter.navigate(コマンド)で移動、トップページに行く
  }
}
