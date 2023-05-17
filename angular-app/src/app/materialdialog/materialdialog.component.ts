import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

interface DialogData {
  input: string;
  name: string;
  pass: string;
}

@Component({
  selector: 'app-materialdialog',
  templateUrl: './materialdialog.component.html',
  styleUrls: ['../material/material.component.css'],
  // styleUrls: ['./materialbottomsheet.component.css']
})
export class MaterialdialogComponent implements OnInit {
  message: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.message = 'dialog.';
  }

  showDlog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '400px',
      data: { name: '?', pass: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.message = JSON.stringify(result);
    });
  }
}

// ダイアログ用のコンポーネント
@Component({
  selector: 'app-materialdialog',
  templateUrl: './materialdialog2.component.html',
  // template: `
  //   <mat-dialog-content style="height:250px;">
  //     <p>please input</p>
  //     <mat-form-field>
  //       <input
  //         placeholder="name"
  //         type="text"
  //         matInput[(ngModule)]="data.name"
  //       />
  //     </mat-form-field>
  //     <mat-form-field>
  //       <input
  //         placeholder="password"
  //         type="password"
  //         matInput[(ngModule)]="data.pass"
  //       />
  //     </mat-form-field>
  //     <div mat-dialog-actions>
  //       <button mat-button [mat-dialog-close]="data" ]>OK</button>
  //       <button mat-button (click)="cancel()">Cancel</button>
  //     </div>
  //   </mat-dialog-content>
  // `,
})
export class MyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  cancel() {
    this.dialogRef.close();
  }
}
