import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// ここ試す。。。めっmdぽい
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
import { MateriallistComponent } from './materiallist/materiallist.component'; //リスト
import { MatSortModule } from '@angular/material/sort'; //ソート
import { MaterialtableComponent } from './materialtable/materialtable.component'; //テーブル
import { MaterialtabpanelComponent } from './materialtabpanel/materialtabpanel.component'; //タブパネル
import { MatTabsModule } from '@angular/material/tabs'; //タブパネル
import {
  MaterialbottomsheetComponent,
  MysheetComponent,
} from './materialbottomsheet/materialbottomsheet.component'; //ボトムシート
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; //ボトムシート
import {
  MaterialdialogComponent,
  MyDialogComponent,
} from './materialdialog/materialdialog.component';
import { MatDialogModule } from '@angular/material/dialog';

// FireBase関連
// バージョンが参考書籍と違うらしくインポートを変更してる
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { firebaseConfigInfo } from '../../work/keyfile';
import { FireComponent } from './fire/fire.component';
import { FirepepleComponent } from './firepeple/firepeple.component';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// FireBaseのキー情報をブラウザからコピペ
const firebaseConfig = {
  apiKey: '**********',
  authDomain: '**********',
  projectId: '**********',
  storageBucket: '**********',
  messagingSenderId: '**********',
  appId: '**********',
  measurementId: '**********',
};

console.log(firebaseConfigInfo);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ルートの設定
const routes: Routes = [
  { path: 'fire', component: FireComponent },
  { path: 'firePeople', component: FirepepleComponent },
  { path: 'hello', component: HellorouteComponent },
  { path: 'msg/:id', component: MessagewithserveceComponent },
  { path: 'helloclientserve', component: HellohttpComponent },
  { path: 'msgclientserve', component: MessagehttpComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'materialCard', component: MaterialcardComponent }, // カードコンポーネント
  { path: 'materialList', component: MateriallistComponent }, //リストコンポーネント
  { path: 'materialTable', component: MaterialtableComponent }, // ソート テーブル
  { path: 'materialTab', component: MaterialtabpanelComponent }, // タブ
  { path: 'materialBottom', component: MaterialbottomsheetComponent }, // ボトム
  { path: 'materialDialog', component: MaterialdialogComponent }, // ダイアログ
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
    MaterialcardComponent,
    MateriallistComponent,
    MaterialtableComponent,
    MaterialtabpanelComponent,
    MaterialbottomsheetComponent,
    MaterialdialogComponent,
    MyDialogComponent,
    FireComponent,
    FirepepleComponent, //コマンドで追記
  ],
  entryComponents: [
    MysheetComponent, //追記
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
    MatSortModule, //UI ソート
    MatTabsModule, //UI タブ
    MatBottomSheetModule, // UI ボトムシート
    MatDialogModule, // UI ダイアログ
    AngularFireModule.initializeApp(firebaseConfigInfo), //FireBaseのキー情報を取得して初期化(※ルートで１度のみ実施)
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  // ブートストラップ、起動時に表示するルートコンポーネントを指定する。
  // 中に入れるのは上でインポートしてきているクラス名・NGモジュール（）
  bootstrap: [AppComponent],
  // bootstrap: [ParentofmessageComponent],
  // bootstrap: [UseserviceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
