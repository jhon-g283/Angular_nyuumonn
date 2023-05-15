import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MycheckService } from '../mycheck.service';
import { MycheckService2Service } from '../mycheck-service2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messagewithservece',
  templateUrl: './messagewithservece.component.html',
  styleUrls: ['./messagewithservece.component.css'],
  //providersでサービスをセットするとこのコンポーネントを読み込むときに独自のインスタンスを作成する
  providers: [MycheckService2Service],
})
export class MessagewithserveceComponent implements OnInit {
  @Input() content: string[];
  @Input() content2: string[];

  constructor(
    private service: MycheckService,
    private service2: MycheckService2Service,
    private route: ActivatedRoute
  ) {
    service2.push('最下層のコンポで文字をPush');
  }

  @Output() action = new EventEmitter<MouseEvent>(); //EventEmitter準備

  // EventEmitterを使用して親コンポーネントから渡されたイベントを実行する
  doAction(event: MouseEvent) {
    console.log('doAction event');
    console.log(event);
    this.action.emit(event);
  }
  ngOnInit(): void {
    // コンストラクタでデフォルトでセットされたものを読み込み時にセットして画面表示
    // コンストラクタでサービスをセットしてから使用する
    this.content = [];
    this.content2 = [];
    this.service2.push(
      'params: ' + JSON.stringify(this.route.snapshot.paramMap)
    );
    this.push(this.service.hello2());
    this.content2 = this.service2.list; //サービスから同一のインスタンスを読み込んでセット
  }

  push(item: string) {
    this.service.name = item; //サービスのnameを変更

    this.content.push(this.service.hello2()); //サービス名を変更したものにさらに同じ処理をさせる
  }

  pop() {
    this.content.pop();
  }
}
