import { Component, OnInit, NgZone } from '@angular/core';
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newapp';

  state: Observable<firebase.User>; //FireBaseのユーザー名取得用のオブサーバー
  userName: string = '(not logined.)'; //ユーザー名

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    // this.afAuth.auth.onAuthStateChanged((usr)=>{
    this.afAuth.onAuthStateChanged((usr) => {
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    });

    // --
    this.state = this.afAuth.authState; //Observaleをセット

    // FireBaseのバージョンが参考ソースと異なるのと、非同期通信では無限ループに陥るためObservaleでログインのステータスが変わった際にユーザー名を取る処理にした
    this.state.subscribe((res) => {
      console.log('?.displayName ' + res?.displayName);
      // (not logined.)
      const user = res?.displayName ? '*********' : ''; //ユーザー名はdisplayNameで取得できるがキャプチャを取るので画面上には出さない
      this.userName = user !== '' ? 'User:' + user : '(not logined.)'; //ユーザー名セット
    });
    // --
  }

  loginCheck() {
    // ユーザー名の文字列を見て未ログインならログイン処理実施
    if (this.currentUser == '(not logined.)') {
      this.login();
    } else {
      // ログアウト時の確認
      if (confirm('Are you logout now?')) {
        this.logout();
      }
    }
  }

  login() {
    // ログイン処理実施
    let provider = new firebase.auth.GoogleAuthProvider();
    // this.afAuth.auth.signInWithRedirect(provider);
    this.afAuth.signInWithRedirect(provider);
  }

  logout() {
    // this.afAuth.auth.signOut();
    this.afAuth.signOut();
    this.router.navigate(['']);
  }

  get currentUser() {
    // return this.afAuth.auth != null ?
    //   this.afAuth.auth.currentUser != null?
    //     this.afAuth.auth.currentUser.displayName :
    //     '(not logined.)' :
    //   '(not logined.)';

    return this.userName;
  }
}
