import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// コンポーネント（タグ、スタイル）＝＞取りまとめやくのモジュール＝＞メインという感じの流れ