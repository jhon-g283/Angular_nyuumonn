import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
// デコレータで属性を設定
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //タグを指定
  styleUrls: ['./app.component.css'], //スタイルを指定
})

// AppComponentとしてエクスポート
export class AppComponent {
  title = 'angular-app';
  message = '';

  constructor(private router: Router) {
    // subscribeを使用することでルーターイベント発生時の処理をあらかじめ設定しておくことができる。
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // イベントがNavigationStartなら関数実行
        this.navigate(event);
      }
    });
  }

  navigate(event: any) {
    // イベントオブジェクトからUrlを取得
    this.message = event.url;
  }
  doClick() {
    this.router.navigate(['']); //touter.navigate(コマンド)で移動、トップページに行く
  }
}
