import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-messagewithservece',
  templateUrl: './messagewithservece.component.html',
  styleUrls: ['./messagewithservece.component.css'],
})
export class MessagewithserveceComponent implements OnInit {
  @Input() content: string[];

  constructor(private servvice: MycheckService) {
    // コンストラクタでサービスをセットしてから使用する
    this.content = ['223'];
  }

  @Output() action = new EventEmitter<MouseEvent>(); //EventEmitter準備

  // EventEmitterを使用して親コンポーネントから渡されたイベントを実行する
  doAction(event: any) {
    console.log('doAction event');
    console.log(event);
    this.action.emit(event);
  }
  ngOnInit(): void {
    this.content.push(this.servvice.hello2());
  }

  push(item: string) {
    this.servvice.name = item;
    this.content.push(this.servvice.hello2());
  }

  pop() {
    this.content.pop();
  }
}
