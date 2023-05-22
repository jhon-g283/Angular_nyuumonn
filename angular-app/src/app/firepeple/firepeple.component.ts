import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firepeple',
  templateUrl: './firepeple.component.html',
  styleUrls: ['../material/material.component.css'],
  // styleUrls: ['./materialbottomsheet.component.css']
})
export class FirepepleComponent implements OnInit {
  message: string = 'people data';
  data: any;
  name: string;
  mail: string;
  number: string;

  state: Observable<firebase.User>; //FireBaseのユーザー名取得用のオブサーバー
  userName: string = '未ログインの状態・・・・'; //ユーザー名

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.access();
    this.state = this.afAuth.authState; //Observaleをセット

    // FireBaseのバージョンが参考ソースと異なるのと、非同期通信では無限ループに陥るためObservaleでログインのステータスが変わった際にユーザー名を取る処理にした
    this.state.subscribe((res) => {
      const user = res?.displayName ? '*********' : ''; //ユーザー名はdisplayNameで取得できるがキャプチャを取るので画面上には出さない
      this.userName = 'User:' + user; //ユーザー名セット
    });
  }

  access() {
    this.db
      .collection('people')
      .valueChanges()
      .subscribe(
        (value) => {
          this.data = value;
        },
        (error) => {
          this.message = '(can not get data ....)';
          this.data = null;
        }
      );
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    // バージョン違いでthis.afAuth.auth.signInWithRedirectではない
    // アカウントを選択・承認した後リダイレクト方式でログインを実施する。
    this.afAuth.signInWithRedirect(provider).then((result) => {
      this.access();
    });
  }

  logout() {
    // this.afAuth.auth.signOut(); バージョン違い
    this.afAuth.signOut();
    this.access();
  }

  get currentUser() {
    // 書籍とFireBaseバージョンが異なるため別処理を作成
    // return this.afAuth.auth != null ?
    // this.afAuth.authState.currentUser.displayName : "not logind":"not logind";
    // return (
    //   this.afAuth != null
    //     ? this.afAuth.currentUser != null
    //       ? this.afAuth.currentUser.displayName
    //       : ''
    //     : ''
    // );
    return this.userName;
  }

  // データ追加
  add() {
    const data = { name: this.name, mail: this.mail, number: this.number }; //データを用意
    this.db.collection('people').add(data); //追加実施
    // フォームの初期化」
    this.name = '';
    this.mail = '';
    this.number = '';
  }

  // 検索
  find(val: string) {
    this.db
      .collection('people', (ref) => ref.where('name', '==', val)) //条件に一致するものにフィルター
      .valueChanges()
      .subscribe(
        (value) => {
          this.data = value; //データをセット
        },
        (error) => {
          this.message = 'error';
          this.data = null;
        }
      );
  }
}
