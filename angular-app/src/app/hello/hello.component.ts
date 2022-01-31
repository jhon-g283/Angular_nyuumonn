// おまじない的なもの、OnInitは初期化系
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';//フォームコントロール、フォームグループをインポート



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

       <!-- loopでli表示 -->
      <ul>
        <li *ngFor="let item of data">{{item}}</li>
      </ul>

      <!-- switch文・・なぜか動かない -->
      <p>{{switch}}</p>
      <p *ngIf="switch === 'one'">iii</p>
      <div [ngSwitch]="switch">
          <p *ngSwitchCace="'one'">First paragraph!</p>
          <p *ngSwitchCace='two'>Second paragraph!</p>
          <p *ngSwitchCace="'three'">Third paragraph!</p>
          <p *ngSwitchDefault>Default paragraph</p>
      </div>
      <select  #sel (change)="doSelect(sel.value)">
        <option value="one">one</option>
        <option>two</option>
        <option>three</option>
      </select>

      <!--  Style バインディング -->
      <p [style.font-size.pt] ="36" [style.color]="'#F00'" >{{message4}}:36</p>
      <p [style.font-size.pt] ="28" [style.color]="'#F99'" >{{message4}}:36</p>
      <p [style.font-size.pt] ="20" [style.color]="'#F20'" >{{message4}}:36</p>
      
      <!-- ngClass -->
      <p [ngClass]= "nowClass" >ngClass:{{message5}}</p>
      <input type="checkbox" #ck1 (change)="check(ck1.checked,ck2.checked,ck3.checked);">Thin
      <input type="checkbox" #ck2 (change)="check(ck1.checked,ck2.checked,ck3.checked);">Large
      <input type="checkbox" #ck3 (change)="check(ck1.checked,ck2.checked,ck3.checked);">Frame

      <!-- ngStyle -->
      <p [ngStyle]= "nowStyle" >ngStyle:{{message6}}</p>
      <a>border-style:</a><input type="text" #in1 (change)="check2(in1.value,in2.value,in3.value);"><br>
      <a>border-width:</a><input type="text" #in2 (change)="check2(in1.value,in2.value,in3.value);"><br>
      <a>border-color:</a><input type="text" #in3 (change)="check2(in1.value,in2.value,in3.value);"><br>
      
      <!-- ここまで２章 -->
      <!-- ３章 -->

      <p>テンプレート駆動</p>
      <title>{{title}}</title>
      <p>{{message7}}</p>
      <p>TYPE:{{text1}}".   <=====ngModelに結びつけたテキストボックスのプロパティの値とリアルタイムに同じになる"</p>
      <input type="text" [(ngModel)]="text1" />

      <p>リアクティブフォーム テンプレートの型をコンポ側で変数として宣言することで制御の主導権やプロパティの取得ができる。（formControl）</p>
      <p>{{message8}}</p>
      <p>TYPE:{{myControl.value}}".   <=====（画面）テンプレート側でなく、コンポーネント側が制御の主導権を握れる"</p>
      <input type="text" [formControl]="myControl" />
      <button (click)="doClick3()">Click</button>


      <p class = "red-border">------------------------</p>
      <p>フォームコントロールグループ フォームコントロールをグループにできる。テンプレ内のnameとコンポ側のフォーム用インスタンスを結びつけておく</p>
      <p>{{message9}}</p>

      <form [formGroup] = "myControlF" (ngSubmit)="onSubmit()">
      <table>
        <tr><th>Name</th><td>
          <input type="text" formControlName="name">
        </td></tr>
        <tr><th>Mail</th><td>
          <input type="text" formControlName="mail">
        </td></tr>
        <tr><th>Age</th><td>
          <input type="number" formControlName="age">
        </td></tr>
        <tr><th></th><td>
          <input type="submit" value="click">
        </td></tr>

      </table>


      </form>


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
  message4:string;
  message5:string;
  message6:string;
  message7:string;
  message8:string;
  message9:string;

  price:number;
  now:Date;//日付
  styleClass:string;//バインド用のクラス名
  count:number;
  input:string;
  visible:boolean;
  data:string[];
  switch:string;

  nowClass:any;//
  nowStyle:any;//

  text1:string;//テンプレート駆動フォームの値
  myControl:FormControl;//リアクティブフォームの型
  myControlF:FormGroup;//フォームグループの型


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

    console.log("initialise");
    this.title = 'Hellow-App';
    this.message = 'this is My First Component!!';
    this.message2 = "thie is inline-template!"
    this.message3 = "--"
    this.message4="Font Size";
    this.message5 = "";
    this.message6 = "";
    this.message7 = "双方向バインド（ngModel）使用：";
    this.message8 = "リアクティブフォームを使用";
    this.message9 = "フォームグループ使用";
    
    this.price=1123450;
    this.styleClass="red";//赤にする
    this.count=0;
    this.visible=false;
    this.data = ["1data","2data","3data"];
    this.switch="one";

    this.nowClass = {'thin':false,'large':false,'frame':false};
    this.nowStyle = {'border-style':'','border-width':'','border-color':''};

    this.myControl = new FormControl('ok');//リアクティブフォームのセット、初期値入り

    // フォームグループ作成、テンプレートのタグ内のnameに紐づいたフォームコントロールのインスタンスを設定
    this.myControlF= new FormGroup({
      name : new FormControl(""),
      mail : new FormControl(""),
      age : new FormControl(0)
            
    });
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

  doSelect(val:any){
    this.switch=val;
    console.log("change to "  + val);
  }

  // チェックボックスのクラス変更関数
  check(c1:boolean,c2:boolean,c3:boolean){
    this.nowClass.thin=c1;
    this.nowClass.large=c2;
    this.nowClass.frame=c3;

    this.message5=c1 + "," + c2 + "," + c3;

  }

  // テキストボックス内の値をスタイル値に反映させる。
  check2(in1:any,in2:any,in3:any){
    this.nowStyle['border-style']=in1;
    this.nowStyle['border-width']=in2 + "px";
    this.nowStyle['border-color']=in3;
    
    this.message6 = JSON.stringify(this.nowStyle);

  }

  doClick3(){
    this.message8 = "[" + this.myControl.value + "] と書きました。(入力ではなくボタン押下時のイベント駆動)";

  }

  onSubmit(){
    let result = this.myControlF.value;
    this.message9 ="Submitに埋め込んだ関数実行。グループ用の型、myControlFのからvalueでプロパティを取得　" +  JSON.stringify(result);

  }


}
