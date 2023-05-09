import { Injectable } from '@angular/core'; //DIにはInjectableのインポートが必要

@Injectable({
  providedIn: 'root', //サービスが組み込まれる場所
})
export class MycheckService {
  private _name: string;

  constructor() {
    this._name = '(no-name)';
  }

  // サービスの処理を作成
  hello(name: string) {
    //引数で入ったものを返却する
    console.log('name:' + name);
    return 'Hello,' + name + '!!';
  }

  hello2() {
    //セッターでセットされたものを返却する
    console.log('name:' + this.name);
    return 'Hello,' + this._name + '!!';
  }

  // アクセサのゲッター
  get name() {
    return this._name; //このコンポーネントのnameを返す
  }

  // アクセサのセッター
  set name(name: string) {
    this._name = name; //このコンポーネントのnameをセットする
  }
}
