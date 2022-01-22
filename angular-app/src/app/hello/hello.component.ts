// おまじない的なもの、OnInitは初期化系
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  // リンクをHTMLからテンプレートインラインに変更して表示
  template:`
    <div id="body" >
      <h1>{{title}}</h1>
      <p>{{message2}}</p>

      <button (click) = "doClick()">Click</button>

      <p>{{message3}}</p>
      <!-- #XXX でクラス名XXX クラス名.valueはDocument.getElementByID(ID名)と同じ意味合い -->
      <input type="text" #field1 (keyup)="doType(field1.value)"/>
      <!-- ifでの分岐　Elseに該当するものがないのが特徴 -->
      <p *ngIf="visible" (click)="doClick2()" class="red">This is TRUE message.</p>
      <p *ngIf="visible == false" (click)="doClick2()" class="">This is FALSE message.</p>
      <ul>
        <li *ngFor="let item of data">{{item}}</li>
      </ul>
      <div [ngSwitch]="switch">
          <p *ngSwitchCace="'one'">First paragraph!</p>
          <p *ngSwitchCace="'two'">Second paragraph!</p>
          <p *ngSwitchCace="'three'">Third paragraph!</p>
          <p *ngSwitchDefault=>Default paragraph</p>
      </div>
      <select #sel></select>
      
    </div>
  
  `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  // プロパティの宣言
  title:string;
  message:string;
  message2:string;
  message3:string;
  price:number;
  now:Date;//日付
  styleClass:string;//バインド用のクラス名
  count:number;
  input:string;
  visible:boolean;
  data:string[];

  // コンストラクタ
  constructor() { 
    // 1sごとに処理実施
    setInterval(()=>{
      this.now = new Date();
      // クラス名がRedなら空欄、空欄ならRedにする処理を1秒毎に実施する
      this.styleClass = this.styleClass == 'red' ?  '' : 'red';
      console.log(this.styleClass);
    
    },1000)


  }
// インターフェース
  ngOnInit() {
    this.title = 'Hellow-App';
    this.message = 'this is My First Component!!';
    this.message2 = "thie is inline-template!"
    this.message3 = "--"
    
    this.price=1123450;
    this.styleClass="red";//赤にする
    this.count=0;
    this.visible=false;
    this.data = ["1data","2data","3data"];
  }

  // あらかじめ用意した関数をhtml内の{{}}で表示
  today(){
    return new Date().toLocaleString();
  }
  today2(){

    return this.now.toLocaleString();
  }

  // クリックで動作する関数
  doClick(){
    this.message2 = ++this.count + "回クリックしました";
    console.log("click");
  }

  // フォーム入力用の関数
  doType(val:string){
    this.input=val;
    this.message3 ="you type:" + this.input;
    console.log("typing  " +val);
  }

  doClick2(){
    this.visible = !this.visible;
  }

}
