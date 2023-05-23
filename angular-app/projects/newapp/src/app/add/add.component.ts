import { Component, OnInit } from '@angular/core';
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
// import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  message: string;
  data: any;
  isbn: string;
  constructor(
    private store: AngularFirestore,
    private fns: AngularFireFunctions, //FireStoreの関数
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.message = 'please input ISBN code!';
    this.data = null;
    this.isbn = '';
  }

  getISBN() {
    // すでにFireBaseのデータに登録済みかどうかチェックする。
    this.store
      .collection('books', (ref) => ref.where('isbn', '==', this.isbn))
      .valueChanges()
      .subscribe(
        (value) => {
          if (value.length == 0) {
            this.data = null;
            this.message = "can't get data...";
          } else {
            this.data = value[0];
            this.message = 'data found!';
          }
        },
        (error) => {
          console.log(error);
          this.message = "can't get data...";
          this.data = null;
        }
      );
  }

  add() {
    this.message = 'wait...';
    const call = this.fns.httpsCallable('isbn'); //CloudFunction,FireStoreにアップした関数を呼び出す。

    call({ isbn: this.isbn }).subscribe(
      (resp) => {
        console.log('resp');
        console.log(resp);
        this.message = 'sended! Please wait a few minutes...';
        this.isbn = '';
      },
      (err) => {
        console.error({ err });
      }
    );
  }
}
