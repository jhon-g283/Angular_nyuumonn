import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //フォーム用のモジュール、テンプレート駆動フォーム,リアクティブモジュール
import { RouterModule, Routes } from '@angular/router'; //Routeモジュール
import { HttpClientModule } from '@angular/common/http';

// 定義部分にあたるapp.componentを取り込む,import
import { AppComponent } from './app.component';
// コマンド経由でコンポーネントを作成すると自動でモジュールに追記される。HelloComponent
import { HelloComponent } from './hello/hello.component';
import { Hellow2Component } from './hellow2/hellow2.component';
import { MessageComponent } from './message/message.component';
import { ParentofmessageComponent } from './parentofmessage/parentofmessage.component';
import { MystyleDirective } from './mystyle.directive';
import { UseserviceComponent } from './useservice/useservice.component';
import { MessagewithserveceComponent } from './messagewithservece/messagewithservece.component';
import { MycheckService } from './mycheck.service';
import { MycheckService2Service } from './mycheck-service2.service';
import { HellorouteComponent } from './helloroute/helloroute.component';
import { HellohttpComponent } from './hellohttp/hellohttp.component';
import { MessagehttpComponent } from './messagehttp/messagehttp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { MatButtonModule } from '@angular/material/button'; //ボタン
import { MatIconModule } from '@angular/material/icon'; //アイコン
import { MatButtonToggleModule } from '@angular/material/button-toggle'; //トグルボタン
import { MatInputModule } from '@angular/material/input'; //入力ボックス
import { MatCheckboxModule } from '@angular/material/checkbox'; //チェックボックス
import { MatRadioModule } from '@angular/material/radio'; //UI ラジオボタン
import { MatSelectModule } from '@angular/material/select'; //UI ポップアップメニュー
import { MatSliderModule } from '@angular/material/slider'; // スライダー
import { MatNativeDateModule } from '@angular/material/core'; //日付
import { MatDatepickerModule } from '@angular/material/datepicker'; // 日付
import { MatToolbarModule } from '@angular/material/toolbar'; //ツールバー
import { MatDividerModule } from '@angular/material/divider'; //ディバイダー
import { MatCardModule } from '@angular/material/card'; //カードレイアウト
import { MaterialcardComponent } from './materialcard/materialcard.component';
import { MatExpansionModule } from '@angular/material/expansion'; //アコーディオン
import { MatListModule } from '@angular/material/list'; //リスト

// ルートの設定
const routes: Routes = [
  { path: 'hello', component: HellorouteComponent },
  { path: 'msg/:id', component: MessagewithserveceComponent },
  { path: 'helloclientserve', component: HellohttpComponent },
  { path: 'msgclientserve', component: MessagehttpComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'materialCard', component: MaterialcardComponent }, // カードコンポーネント
];

// NgModuleというやつがAuglarでは大事で、先ほど定義したコンポーネントを設定で使用してエクスポートするっぽい
@NgModule({
  // 使用するコンポーネント類の宣言部分、ここに記載したコンポーネントを読み込む
  declarations: [
    AppComponent,
    HelloComponent,
    Hellow2Component,
    MessageComponent,
    ParentofmessageComponent,
    MystyleDirective,
    UseserviceComponent,
    MessagewithserveceComponent,
    HellorouteComponent,
    HellohttpComponent,
    MessagehttpComponent,
    MaterialComponent,
    MaterialcardComponent, //コマンドで追記
  ],
  // Angluarのモジュールの読み込み
  imports: [
    BrowserModule,
    FormsModule, // フォームモジュール
    ReactiveFormsModule, //リアクティブモジュール
    RouterModule.forRoot(
      routes,
      { enableTracing: true } //デバッグ用
    ),
    HttpClientModule,
    BrowserAnimationsModule, //Http通信用
    MatButtonModule, //UI ボタン
    MatIconModule, //UI アイコン
    MatButtonToggleModule, //UI トグル
    MatInputModule, // UI フォーム
    MatCheckboxModule, // UI チェックボックス
    MatRadioModule, //UI ラジオボタン
    MatSelectModule, //UI ポップアップメニュー
    MatSliderModule, //UI スライダー
    MatNativeDateModule, //日付
    MatDatepickerModule, // 日付
    MatToolbarModule, //  UI ツールバー
    MatDividerModule, //　UI ディバイダー
    MatCardModule, // UI カードレイアウト
    MatExpansionModule, //UI アコーディオン
    MatListModule, //UI リスト
  ],
  providers: [],
  // ブートストラップ、起動時に表示するルートコンポーネントを指定する。
  // 中に入れるのは上でインポートしてきているクラス名・NGモジュール（）
  bootstrap: [AppComponent],
  // bootstrap: [ParentofmessageComponent],
  // bootstrap: [UseserviceComponent],
})
export class AppModule {
  constructor(
    private service: MycheckService,
    private service2: MycheckService2Service
  ) {
    // サービスのnameをセッターで値セットする
    service.name = 'first name';
    service2.push('Kirby');
    service2.push('DDD');
    service2.push('Waduldee');
  }
}

// コンポーネント（タグ、スタイル）＝＞取りまとめやくのモジュール＝＞メインという感じの流れ
