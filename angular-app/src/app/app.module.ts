import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';//フォーム用のモジュール、テンプレート駆動フォーム,リアクティブモジュール

// 定義部分にあたるapp.componentを取り込む,import
import { AppComponent } from './app.component';
// コマンド経由でコンポーネントを作成すると自動でモジュールに追記される。HelloComponent
import { HelloComponent } from './hello/hello.component';
import { Hellow2Component } from './hellow2/hellow2.component';

// NgModuleというやつがAuglarでは大事で、先ほど定義したコンポーネントを設定で使用してエクスポートするっぽい
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hellow2Component//コマンドで追記
  ],
  imports: [
    BrowserModule,
    FormsModule, // フォームモジュール
    ReactiveFormsModule//リアクティブモジュール
  ],
  providers: [],
  // ブートストラップ
  // 中に入れるのは上でインポートしてきているクラス名・NGモジュール（）
  // bootstrap: [AppComponent]
  bootstrap: [HelloComponent]
})
export class AppModule { }

// コンポーネント（タグ、スタイル）＝＞取りまとめやくのモジュール＝＞メインという感じの流れ