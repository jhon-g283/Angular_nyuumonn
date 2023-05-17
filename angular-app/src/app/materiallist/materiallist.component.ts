import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css'],
})
export class MateriallistComponent implements OnInit {
  message: string;
  myControl: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.message = 'please select list';
    this.myControl = new FormGroup({
      list1: new FormControl(''),
    });
  }

  click() {
    this.message = JSON.stringify(this.myControl.value);
  }
}
