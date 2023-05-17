import { Component, NgModule, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
// import { MatListModule } from '@angular/material';
import { Router } from '@angular/router';
//

@Component({
  selector: 'app-materialbottomsheet',
  templateUrl: './materialbottomsheet.component.html',
  styleUrls: ['../material/material.component.css'],
  // styleUrls: ['./materialbottomsheet.component.css']
})
export class MaterialbottomsheetComponent implements OnInit {
  message: string;

  //ボトムシートをコンストラクタで読む
  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.message = 'bottom sheet!';
  }

  showSheet() {
    this.bottomSheet.open(MysheetComponent); //作成したMysheetComponentを表示
  }
}

@Component({
  selector: 'app-mysheet',
  // template: './materialbottomsheet2.component.html',
  template: `<h2></h2>
    <!-- <mat-action-list> -->
    <button mat-list-item (click)="click('')">Top Page</button>
    <button mat-list-item (click)="click('hello')">Hello</button>
    <button mat-list-item (click)="click('msg')">Message</button>
    <!-- </mat-action-list> --> `,
  styleUrls: ['../material/material.component.css'],
})
export class MysheetComponent {
  constructor(
    private router: Router,
    private bottomSheetRef: MatBottomSheetRef<MysheetComponent>
  ) {}

  click(path: string): void {
    this.bottomSheetRef.dismiss();
    this.router.navigate([path]);
  }
}
