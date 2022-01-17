import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 定義部分にあたるapp.componentを取り込む,import
import { AppComponent } from './app.component';

// NgModuleというやつがAuglarでは大事で、先ほど定義したコンポーネントを設定で使用してエクスポートするっぽい
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// コンポーネント（タグ、スタイル）＝＞取りまとめやくのモジュール＝＞メインという感じの流れ