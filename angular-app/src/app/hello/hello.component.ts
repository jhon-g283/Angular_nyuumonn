// おまじない的なもの、OnInitは初期化系
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//Form Builderフォームビルダー、FormControlフォームコントロール、フFormGroupォームグループ,Validatorsバリデーターをインポート
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// 関数類
function alpha(c: AbstractControl) {
  // 引数はエラー回避のためAbstractControlへ
  let REGPATTERN = /^[a-zA-Z]+$/;

  if (REGPATTERN.test(c.value)) {
    return null;
  } else {
    return { alpha: { valid: false } };
  }
}

function even(c: AbstractControl) {
  return c.value % 2 == 0 ? null : { even: { valid: false } };
}

@Component({
  selector: 'app-hello',
  // templateUrl: './hello.component.html',
  // リンクをHTMLからテンプレートインラインに変更して表示
  template: `
    <div id="body">
      <a> 本日の日付　</a>
      <p class="{{ styleClass }}">{{ now }}</p>
      <p class="red-border">------------------------</p>
      <h1>{{ title }}</h1>
      <p>{{ message2 }}</p>

      <button (click)="doClick()">Click で関数内の処理でプロパティ更新</button>

      <p class="red-border">------------------------</p>
      <p>keyup とプロパティ更新でフォームに入力したワードに常に更新する</p>
      <p>{{ message3 }}</p>
      <!-- #XXX でクラス名XXX クラス名.valueはDocument.getElementByID(ID名)と同じ意味合い -->
      <input type="text" #field1 (keyup)="doType(field1.value)" />

      <p class="red-border">------------------------</p>
      <p>
        クリック時にフラグのプロパティを更新し、If分岐　*ngIf でスタイルを分岐
      </p>
      <!-- ifでの分岐　Elseに該当するものがないのが特徴 -->
      <p *ngIf="visible" (click)="doClick2()" class="red">
        This is TRUE message.
      </p>
      <p *ngIf="visible == false" (click)="doClick2()" class="">
        This is FALSE message.
      </p>

      <p class="red-border">------------------------</p>
      <p>配列分のデータをLoop</p>
      <!-- loopでli表示 -->
      <ul>
        <li *ngFor="let item of data">{{ item }}</li>
      </ul>

      <p class="red-border">------------------------</p>
      <p>*ngSwitch でプルダウンの値によって分岐させる</p>
      <!-- switch文・・なぜか動かない -->
      <p>{{ switch }}</p>
      <p *ngIf="switch === 'one'">iii</p>
      <div [ngSwitch]="switch">
        <p *ngSwitchCase="'one'">First paragraph!</p>
        <p *ngSwitchCase="'two'">Second paragraph!</p>
        <p *ngSwitchCase="'three'">Third paragraph!</p>
        <p *ngSwitchDefault>Default paragraph</p>
      </div>
      <select #sel (change)="doSelect(sel.value)">
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </select>

      <p class="red-border">------------------------</p>
      <p>
        styleバインディングでクラスやスタイルを直で設定せずにプロパティでスタイルを変更する
      </p>

      <!--  Style バインディング -->
      <p [style.font-size.pt]="36" [style.color]="'#F00'">{{ message4 }}:36</p>
      <p [style.font-size.pt]="28" [style.color]="'#F99'">{{ message4 }}:36</p>
      <p [style.font-size.pt]="20" [style.color]="'#F20'">{{ message4 }}:36</p>

      <!-- ngClass -->
      <p [ngClass]="nowClass">ngClass:{{ message5 }}</p>
      <input
        type="checkbox"
        #ck1
        (change)="check(ck1.checked, ck2.checked, ck3.checked)"
      />Thin
      <input
        type="checkbox"
        #ck2
        (change)="check(ck1.checked, ck2.checked, ck3.checked)"
      />Large
      <input
        type="checkbox"
        #ck3
        (change)="check(ck1.checked, ck2.checked, ck3.checked)"
      />Frame

      <!-- ngStyle -->
      <p [ngStyle]="nowStyle">ngStyle:{{ message6 }}</p>
      <a>border-style:</a
      ><input
        type="text"
        #in1
        (change)="check2(in1.value, in2.value, in3.value)"
      /><br />
      <a>border-width:</a
      ><input
        type="text"
        #in2
        (change)="check2(in1.value, in2.value, in3.value)"
      /><br />
      <a>border-color:</a
      ><input
        type="text"
        #in3
        (change)="check2(in1.value, in2.value, in3.value)"
      /><br />

      <!-- ここまで２章 -->
      <!-- ３章 -->

      <p class="red-border">------------------------</p>
      <p>
        双方向バインディング　画面側の入力値とプログラム側での更新の両方から値を更新すること
        [ngModel()]という書き方で使用する
      </p>
      <p>テンプレート駆動</p>
      <title>{{ title }}</title>
      <p>{{ message7 }}</p>
      <p>
        TYPE:{{ text1 }}".
        <=====ngModelに結びつけたテキストボックスのプロパティの値とリアルタイムに同じになる"
      </p>
      <input type="text" [(ngModel)]="text1" />

      <p class="red-border">------------------------</p>
      <p>
        リアクティブフォーム
        テンプレートの型をコンポ側で変数として宣言することで制御の主導権やプロパティの取得ができる。（formControl）
      </p>
      <p>フォームコントロール1個</p>
      <p>{{ message8 }}</p>
      <p>
        TYPE:{{ myControl.value }}".
        <=====（画面）テンプレート側でなく、コンポーネント側が制御の主導権を握れる"
      </p>
      <input type="text" [formControl]="myControl" />
      <button (click)="doClick3()">Click</button>

      <p class="red-border">------------------------</p>
      <p>
        フォームコントロールグループ
        フォームコントロールをグループにできる。テンプレ内のnameとコンポ側のフォーム用インスタンスを結びつけておく
      </p>
      <p>
        フォームコントロールをグループにする　[formGroup]="グループ名"で使用
      </p>
      <p>{{ message9 }}</p>
      <!-- テキストボックス -->
      <form [formGroup]="myControlF" (ngSubmit)="onSubmit()">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- formControlName=名前が重要、これをもとに取得する -->
              <input type="text" formControlName="name" />
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <input type="text" formControlName="mail" />
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <input type="number" formControlName="age" />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="click" />
            </td>
          </tr>
        </table>
      </form>

      <!-- チェックボックス -->
      <p class="red-border">------------------------</p>
      <p>{{ message10 }}</p>
      <form [formGroup]="myControlC" (ngSubmit)="onSubmitC()">
        <div>
          <label
            ><input type="checkbox" formControlName="control" />Check Box</label
          >
        </div>
        <div>
          <input type="submit" value="click" />
        </div>
      </form>

      <!-- ラジオぼたん -->
      <p class="red-border">------------------------</p>
      <p>{{ message11 }}</p>
      <form [formGroup]="myControlR" (submit)="onSubmitR()">
        <div>
          <!-- ラジオボタンの場合はformControlNameは同じで問題ない -->
          <label
            ><input
              type="radio"
              value="male"
              formControlName="control_radio"
            />male</label
          >
          <label
            ><input
              type="radio"
              value="female"
              formControlName="control_radio"
            />female</label
          >
        </div>
        <div>
          <input type="submit" value="click" />
        </div>
      </form>

      <!-- プルダウン -->
      <p class="red-border">------------------------</p>
      <p>{{ message12 }}</p>
      <form [formGroup]="myControlP" (submit)="onSubmitP()">
        <div>
          <select formControlName="controle_pull">
            <option>Windows</option>
            <option>macOS</option>
            <option>Linux</option>
            <option>ChromeOS</option>
          </select>
        </div>
        <input type="submit" value="click" />
      </form>

      <!-- プルダウン複数選択 -->
      <p class="red-border">------------------------</p>
      <p>{{ message13 }}</p>
      <form [formGroup]="myControlP_M" (submit)="onSubmitP_M()">
        <div>
          <select formControlName="controle_pull_multi" multiple size="5">
            <option>Android</option>
            <option>iOS</option>
            <option>Linux___</option>
            <option>ChromeOS___</option>
          </select>
        </div>
        <input type="submit" value="click" />
      </form>

      <!-- ngFormを使用したフォーム取得 -->
      <p class="red-border">------------------------</p>
      <p>
        *ngForm
        でngFormを使用できる。（ngSubmit）でフォーム内の値をそのまま関数へオブジェクトとして飛ばすことができる。
      </p>
      <p>{{ message14 }}</p>
      <!-- ngFormはIDからコンポーネントのプロパティを取得できる。XXX.value それをSubmit時の関数の引数へセット -->
      <form #f="ngForm" (ngSubmit)="onSubmitNGF(f.value)">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- ngFormではformControlNameではなくNameとngmodelを使う -->
              <input type="text" name="name" ngModel />
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <input type="text" name="mail" ngModel />
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <input type="number" name="age" ngModel />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="click" />
            </td>
          </tr>
        </table>
      </form>

      <!-- フォームビルダー使用 -->
      <p class="red-border">------------------------</p>
      <p>
        フォームコントロールグループ( FormBuilderを使用)
        フォームコントロールをグループにできる。テンプレ内のnameとコンポ側のフォーム用インスタンスを結びつけておく
      </p>
      <p>{{ message15 }}</p>
      <!-- テキストボックス -->
      <form [formGroup]="myControlFB" (ngSubmit)="onSubmitFB()">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- formControlName=名前が重要、これをもとに取得する -->
              <input type="text" formControlName="name" />
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <input type="text" formControlName="mail" />
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <input type="number" formControlName="age" />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="click" />
            </td>
          </tr>
        </table>
      </form>

      <!-- フォームビルダー使用 -->
      <p class="red-border">------------------------</p>
      <p>
        フォームコントロールグループ( バリデーション付き)
        フォームコントロールをグループにできる。テンプレ内のnameとコンポ側のフォーム用インスタンスを結びつけておくタイミングでバリデーションの設定
      </p>
      <p>{{ message16 }}</p>
      <!-- テキストボックス -->
      <form [formGroup]="myControlVal" (ngSubmit)="onSubmitVal()">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- formControlName=名前が重要、これをもとに取得する -->
              <input type="text" formControlName="name" />
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <input type="text" formControlName="mail" />
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <input type="number" formControlName="age" />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="click" />
            </td>
          </tr>
        </table>
      </form>

      <!-- フォームビルダー使用 でバリデーションの検証機能追加-->
      <p class="red-border">------------------------</p>
      <p>フォームビルダー　バリデーションの検証機能を追加</p>
      <p>{{ message16 }}</p>
      <!-- テキストボックス -->
      <form [formGroup]="myControlFBV" (ngSubmit)="onSubmitFB()">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- formControlName=名前が重要、これをもとに取得する -->
              <!-- ????? name.invalid kakuninnn -->
              <div *ngIf="nameFB.invalid">
                Name is require!!
                (バリデーション用の関数からフォームの値を読み取ってinvalidがあるかチェック)
              </div>
              <div><input type="text" formControlName="name" /></div>
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <div *ngIf="mailFB.invalid">
                mail is invalid!!
                (バリデーション用の関数からフォームの値を読み取ってinvalidがあるかチェック)
              </div>
              <div><input type="text" formControlName="mail" /></div>
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <div *ngIf="ageFB.invalid">
                age is invalid!!
                (バリデーション用の関数からフォームの値を読み取ってinvalidがあるかチェック)
              </div>
              <div><input type="number" formControlName="age" /></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input
                [disabled]="myControlFBV.invalid"
                type="submit"
                value="click"
              />
              <a></a>
            </td>
          </tr>
        </table>
      </form>

      <!-- フォームビルダー使用 でバリデーションの検証機能追加-->
      <p class="red-border">------------------------</p>
      <p>フォームビルダー　バリデーションの検証機能を追加</p>
      <p>{{ message16 }}</p>
      <!-- テキストボックス -->
      <form [formGroup]="myControlFBV2" (ngSubmit)="onSubmitFB()">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- formControlName=名前が重要、これをもとに取得する -->
              <!-- ????? name.invalid kakuninnn -->
              <div *ngIf="nameFB2.errors != null && nameFB2require != null">
                Name is require!! (errorの中身を個別に見てる)
              </div>
              <div><input type="text" formControlName="name" /></div>
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <div *ngIf="mailFB2.errors != null && mailFB2require != null">
                mail is invalid!! (errorの中身を個別に見てる)
              </div>
              <div><input type="text" formControlName="mail" /></div>
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <div *ngIf="ageFB2.errors != null">
                age is invalid!! (errorの中身を個別に見てる)
              </div>
              <div><input type="number" formControlName="age" /></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input
                [disabled]="myControlFBV.invalid"
                type="submit"
                value="click"
              />
              <a></a>
            </td>
          </tr>
        </table>
      </form>

      <p class="red-border">------------------------</p>
      <p>
        フォームビルダー　バリデーションに独自の検証関数をFormCotrolを通して実装
      </p>
      <p>{{ message16 }}</p>
      <!-- テキストボックス -->
      <form [formGroup]="myControlMyRule" (ngSubmit)="onSubmitFB()">
        <table>
          <tr>
            <th>Name</th>
            <td>
              <!-- formControlName=名前が重要、これをもとに取得する -->
              <!-- ????? name.invalid kakuninnn -->
              <div *ngIf="nameFB3.errors != null && nameFB3Reg != null">
                RegPatter Error
              </div>
              <div><input type="text" formControlName="name" /></div>
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>
              <div *ngIf="mailFB3.errors != null && mailFB3Req != null">
                mail is invalid!! (errorの中身を個別に見てる)
              </div>
              <div><input type="text" formControlName="mail" /></div>
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <div *ngIf="ageFB3.errors != null && ageFB3Even != null">
                evem Error!
              </div>
              <div><input type="number" formControlName="age" /></div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input
                [disabled]="myControlFBV.invalid"
                type="submit"
                value="click"
              />
              <a></a>
            </td>
          </tr>
        </table>
      </form>
    </div>
  `,
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  // プロパティの宣言
  // ReactでいうStateの型宣言のようなもの
  title: string;
  message: string;
  message2: string;
  message3: string;
  message4: string;
  message5: string;
  message6: string;
  message7: string;
  message8: string;
  message9: string;
  message10: string;
  message11: string;
  message12: string;
  message13: string;
  message14: string;
  message15: string;
  message16: string;
  messsage17: string;

  price: number;
  now: Date; //日付
  styleClass: string; //バインド用のクラス名
  count: number;
  input: string;
  visible: boolean;
  data: string[];
  switch: string;

  nowClass: any; //
  nowStyle: any; //

  text1: string; //テンプレート駆動フォームの値
  myControl: FormControl; //リアクティブフォームの型

  myControlF: FormGroup; //フォームグループの型
  myControlC: FormGroup;
  myControlR: FormGroup;
  myControlP: FormGroup;
  myControlP_M: FormGroup;
  myControlFB: FormGroup;
  myControlVal: FormGroup;
  myControlFBV: FormGroup;
  myControlFBV2: FormGroup;
  myControlMyRule: FormGroup;

  // コンストラクタ
  // フォームビルダー使用時では引数を用意する。
  constructor(private fb: FormBuilder, private fbv: FormBuilder) {
    // 1sごとに処理実施
    setInterval(() => {
      this.now = new Date(); //日付を再取得してセット
      // クラス名がRedなら空欄、空欄ならRedにする処理を1秒毎に実施する
      this.styleClass = this.styleClass == 'red' ? '' : 'red';
      console.log(this.styleClass);
    }, 1000);
  }
  // インターフェース
  // ngOnInit
  // コンポーネント初期化時に実行、コンストラクタとは違いコンポーネント作成完了の時に動作する
  // こちらはコンポーネントの変化時にコールバック処理を行うライフサイクルの処理を実装するために必要なもの
  ngOnInit() {
    // ReactでいうStateの初期値設定のよううなもの
    console.log('initialise');
    this.title = 'Hellow-App';
    this.message = 'this is My First Component!!';
    this.message2 = 'thie is inline-template!';
    this.message3 = '--';
    this.message4 = 'Font Size';
    this.message5 = '';
    this.message6 = '';
    this.message7 = '双方向バインド（ngModel）使用：';
    this.message8 = 'リアクティブフォームを使用';
    this.message9 = 'フォームグループ使用';
    this.message10 = 'FormGroup checkbox ver';
    this.message11 = 'FormGroup radiobutton ver';
    this.message12 = 'FormGroup pull down';
    this.message13 = 'FormGroup pull down malti';
    this.message14 = 'Use ngForm ';
    this.message15 = 'Use FormBuilder';
    this.message16 = 'With Validator ';
    this.messsage17 = '未使用';

    this.price = 1123450;
    this.styleClass = 'red'; //赤にする
    this.count = 0;
    this.visible = false;
    this.data = ['1data', '2data', '3data'];
    this.switch = 'one';

    this.nowClass = { thin: false, large: false, frame: false };
    this.nowStyle = {
      'border-style': '',
      'border-width': '',
      'border-color': '',
    };

    this.myControl = new FormControl(
      'ok　プロパティとしてリアクティブフォームを宣言して初期値セット'
    ); //リアクティブフォームのセット、初期値入り

    // フォームグループ作成、テンプレートのタグ内のnameに紐づいたフォームコントロールのインスタンスを設定
    this.myControlF = new FormGroup({
      name: new FormControl(''),
      mail: new FormControl(''),
      age: new FormControl(0),
    });

    this.myControlC = new FormGroup({
      control: new FormControl(),
    });

    this.myControlR = new FormGroup({
      control_radio: new FormControl(),
    });

    this.myControlP = new FormGroup({
      controle_pull: new FormControl(),
    });

    this.myControlP_M = new FormGroup({
      controle_pull_multi: new FormControl(),
    });

    //フォームビルダーでグループ作成
    //コンストラクタに引数としてフォームビルダー：fbをあらかじめ作って入れておくこと
    this.myControlFB = this.fb.group({
      name: [''],
      mail: [''],
      age: [0],
    });

    this.myControlFBV = this.fbv.group({
      name: ['', [Validators.required]],
      mail: ['', [Validators.email]],
      age: [0, [Validators.min(1), Validators.max(150)]],
    });

    // フォームコントロールにバリデーションを設定
    this.myControlVal = new FormGroup({
      name: new FormControl('', [Validators.required]), //値：必須
      mail: new FormControl('', [Validators.email]), //値：メール
      age: new FormControl(0, [Validators.min(1), Validators.max(150)]), //１〜１５０まで
    });

    this.myControlFBV2 = new FormGroup({
      name: new FormControl('', [Validators.required]), //値：必須
      mail: new FormControl('', [Validators.email]), //値：メール
      age: new FormControl(0, [Validators.min(1), Validators.max(150)]), //１〜１５０まで
    });

    this.myControlMyRule = new FormGroup({
      name: new FormControl('', [Validators.required, alpha]), //値：必須
      mail: new FormControl('', [Validators.email]), //値：メール
      age: new FormControl(0, [Validators.min(1), Validators.max(150), even]), //１〜１５０まで
    });
  }

  // あらかじめ用意した関数をhtml内の{{}}で表示
  today() {
    return new Date().toLocaleString();
  }
  today2() {
    return this.now.toLocaleString();
  }

  // クリックで動作する関数
  doClick() {
    this.message2 = ++this.count + '回クリックしました';
    console.log('click');
  }

  // フォーム入力用の関数
  doType(val: string) {
    this.input = val;
    this.message3 = 'you type:' + this.input;
    console.log('typing  ' + val);
  }

  doClick2() {
    this.visible = !this.visible;
  }

  doSelect(val: any) {
    this.switch = val;
    console.log('change to ' + val);
    console.log('propaty ' + this.switch);
  }

  // チェックボックスのクラス変更関数
  check(c1: boolean, c2: boolean, c3: boolean) {
    this.nowClass.thin = c1;
    this.nowClass.large = c2;
    this.nowClass.frame = c3;

    this.message5 = c1 + ',' + c2 + ',' + c3;
  }

  // テキストボックス内の値をスタイル値に反映させる。
  check2(in1: any, in2: any, in3: any) {
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2 + 'px';
    this.nowStyle['border-color'] = in3;

    this.message6 = JSON.stringify(this.nowStyle);
  }

  // ボタンでフォームコントロールのValueを取得してセット
  doClick3() {
    this.message8 =
      '[' +
      this.myControl.value +
      '] と書きました。(入力ではなくボタン押下時のイベント駆動)';
  }

  // テキストボックスのFormGroupから値のプロパティを取得してセット
  onSubmit() {
    let result = this.myControlF.value;
    this.message9 =
      'Submitに埋め込んだ関数実行。グループ用の型、myControlFのからvalueでプロパティを取得　' +
      JSON.stringify(result);
  }

  // チェックボックスのFormGroupから値のプロパティを取得してセット
  onSubmitC() {
    let result = this.myControlC.value;
    this.message10 =
      'Submitに埋め込んだ関数実行。グループ用の型、myControlCのvalueでプロパティを取得　' +
      JSON.stringify(result);
  }

  // チェックボックスのFormGroupから値のプロパティを取得してセット
  onSubmitR() {
    let result = this.myControlR.value;
    this.message11 =
      'Submitに埋め込んだ関数実行。グループ用の型、myControlRのvalueでプロパティを取得　' +
      JSON.stringify(result);
  }

  onSubmitP() {
    let result = this.myControlP.value;
    this.message12 =
      'Submitに埋め込んだ関数実行。グループ用の型、myControlPのvalueでプロパティを取得　' +
      JSON.stringify(result);
  }

  onSubmitP_M() {
    let result = this.myControlP_M.value;
    console.log('onSubmitP_M');
    this.message13 =
      'Submitに埋め込んだ関数実行。グループ用の型、myControlPのvalueでプロパティを取得　' +
      JSON.stringify(result);
  }

  // ngForm使用時の関数
  onSubmitNGF(val: any) {
    this.message14 =
      'ngForm からフォーム全体のIDからとった値をを引数に投げて表示' +
      JSON.stringify(val);
  }

  // フォームビルダー使用時の関数
  onSubmitFB() {
    // myControlFB
    let result = this.myControlFB.value;
    console.log('myControlFB');
    this.message15 =
      'Submitに埋め込んだ関数実行。グループ用の型、myControlFBのvalueでプロパティを取得　' +
      JSON.stringify(result);
  }

  // バリデーション使用時の関数等
  get name() {
    return this.myControlVal.get('name');
  }
  get mail() {
    return this.myControlVal.get('mail');
  }
  get age() {
    return this.myControlVal.get('age');
  }

  // バリデーションチェック　ビルダー側の方
  get nameFB() {
    return this.myControlFBV.get('name');
  }
  get mailFB() {
    return this.myControlFBV.get('mail');
  }
  get ageFB() {
    return this.myControlFBV.get('age');
  }

  // バリデーションチェック　ビルダー側の方2
  get nameFB2() {
    return this.myControlFBV2.get('name');
  }
  get nameFB2require() {
    return this.myControlFBV2.get('name').hasError('required');
  }
  get mailFB2() {
    return this.myControlFBV2.get('mail');
  }
  get mailFB2require() {
    return this.myControlFBV2.get('mail').hasError('required');
  }
  get ageFB2() {
    return this.myControlFBV2.get('age');
  }
  get ageFB2require() {
    return this.myControlFBV2.get('name').hasError('age');
  }

  // バリデーションチェック　ビルダー側の方2
  get nameFB3() {
    return this.myControlMyRule.get('name');
  }
  get nameFB3Reg() {
    return this.myControlMyRule.get('name').hasError('alpha');
  }
  get mailFB3() {
    return this.myControlMyRule.get('mail');
  }
  get mailFB3Req() {
    return this.myControlMyRule.get('mail').hasError('required');
  }
  get ageFB3() {
    return this.myControlMyRule.get('age');
  }
  get ageFB3Even() {
    return this.myControlMyRule.get('age').hasError('even');
  }

  onSubmitVal() {
    if (this.myControlVal.invalid) {
      this.message16 =
        'Validatioin error!! フォームグループ.invalid:' +
        this.myControlVal.invalid;
    } else {
      let result = this.myControlVal.value;
      this.message16 = 'バリデーションクリア　' + JSON.stringify(result);
    }
  }
}
