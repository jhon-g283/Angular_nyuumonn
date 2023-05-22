import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['../material/material.component.css'],
  // styleUrls: ['./materialbottomsheet.component.css']
})
export class FireComponent implements OnInit {
  message: string = 'wait/////';
  input: string = '';

  // コンストラクタでDB（FireStore）へアクセス
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('sampledata') //コレクション取得
      .doc('sampledoc') //ドキュメント取得
      .valueChanges() //値の変更があった際に更新を実施
      .subscribe((value: any) => {
        if (value != null) {
          console.log(value);
          this.message = value.message;
        }
      });
  }

  click() {
    console.log('this.input');
    console.log(this.input);
    this.db
      .collection('sampledata')
      .doc('sampledoc')
      .set({ message: this.input });
    this.input = '';
  }
}
