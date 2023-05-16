import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  // テキスト類
  message: string;
  messageOfForm: string;
  messageOfRadio: string;
  messageOfSelect: string;
  messageOfSlider: string;
  messageOfDate: string;
  // フォーム類
  myControl: FormGroup;
  myControlRadio: FormGroup;
  myControlSelect: FormGroup;
  myControlSlider: FormGroup;
  myControlDate: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.message = `please select button`;
    this.messageOfForm = ``;

    this.myControl = new FormGroup({
      name: new FormControl(''),
      number: new FormControl('0'),
      email: new FormControl(''),
    });

    this.myControlRadio = new FormGroup({
      check: new FormControl(true),
      radio: new FormControl('male'),
    });

    this.myControlSelect = new FormGroup({
      select1: new FormControl(''),
      select2: new FormControl(''),
    });

    this.myControlSlider = new FormGroup({
      slider1: new FormControl(''),
      slider2: new FormControl(''),
    });
    this.myControlDate = new FormGroup({
      picker1: new FormControl(new Date()),
    });
  }

  change(v: string) {
    this.message = 'select: "' + v + '".';
  }

  click() {
    this.messageOfForm = JSON.stringify(this.myControl.value);
  }
  clickRadio() {
    this.messageOfRadio = JSON.stringify(this.myControlRadio.value);
  }

  clickSelect() {
    this.messageOfSelect = JSON.stringify(this.myControlSelect.value);
  }
  clickSlider() {
    this.messageOfSlider = JSON.stringify(this.myControlSlider.value);
  }
  clickDate() {
    this.messageOfDate = JSON.stringify(this.myControlDate.value);
  }
}
