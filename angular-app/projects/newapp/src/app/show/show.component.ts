import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  isbn: any;
  data: any;
  comments: any;
  key: string;
  message: string = 'wait...';
  comment: string;

  state: Observable<firebase.User>; //FireBaseのユーザー名取得用のオブサーバー
  userName: string = '未ログインの状態・・・・'; //ユーザー名

  constructor(
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private store: AngularFirestore
  ) {
    const param: any = route.snapshot.paramMap;
    this.isbn = param['params']['isbn'];
  }

  ngOnInit() {
    this.getBook();
    this.state = this.afAuth.authState; //Observaleをセット

    // FireBaseのバージョンが参考ソースと異なるのと、非同期通信では無限ループに陥るためObservaleでログインのステータスが変わった際にユーザー名を取る処理にした
    this.state.subscribe((res) => {
      console.log(res);
      const user = res?.displayName ? '*********' : ''; //ユーザー名はdisplayNameで取得できるがキャプチャを取るので画面上には出さない
      // console.log(res.displayName);
      console.log('res.displayName:' + res.displayName);
      this.userName = 'User:' + user; //ユーザー名セット
    });
  }

  getBook() {
    this.store
      .collection('books', (ref) => ref.where('isbn', '==', this.isbn))
      .snapshotChanges()
      .subscribe(
        (value) => {
          if (value[0] == undefined) {
            this.message = "(can't get data...)";
            this.data = null;
            return;
          }
          this.key = value[0].payload.doc.id;
          this.data = value[0].payload.doc.data();
          this.message = 'Book data.';
          this.getComments();
        },
        (error) => {
          this.message = "(can't get data...)";
          this.data = null;
        }
      );
  }

  getComments() {
    this.store
      .collection('books')
      .doc(this.key)
      .collection('comments', (ref) => ref.orderBy('posted', 'desc').limit(30))
      .valueChanges()
      .subscribe(
        (value) => {
          this.comments = value;
        },
        (error) => {
          this.comments = null;
        }
      );
  }

  addComment() {
    // const name = this.afAuth.auth.currentUser.displayName;
    const name = this.userName;
    const obj = {
      name: name,
      comment: this.comment,
      posted: new Date().getTime(),
    };
    this.store
      .collection('books')
      .doc(this.key)
      .collection('comments')
      .add(obj);
    this.comment = '';
  }
}
