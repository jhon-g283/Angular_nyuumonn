import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
// import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string;
  data: any;

  constructor(
    private store: AngularFirestore,
    private fns: AngularFireFunctions,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.message = 'wait...';
    this.data = null;
    this.getBooks();
  }

  getBooks() {
    this.store
      .collection('books', (ref) => ref.orderBy('created', 'desc').limit(10))
      .valueChanges()
      .subscribe(
        (value) => {
          this.data = value;
          this.message = 'Book list.';
        },
        (error) => {
          this.message = "(can't get data...)";
          this.data = null;
        }
      );
  }
}
