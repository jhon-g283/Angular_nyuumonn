import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map, pipe } from 'rxjs';
class MyData {
  data: string = '';
  list: Person[] = [];
}

interface Person {
  name: string;
  mail: string;
  tel: string;
}

@Injectable({
  providedIn: 'root',
})
export class MycheckHttpService {
  private mydata: MyData = new MyData();

  constructor(private client: HttpClient) {
    // Observaleを使用
    let ob: Observable<Response> = from(fetch('assets/data.json'));
    ob.subscribe((resp) => {
      resp.json().then((val: MyData) => {
        this.mydata = val;
      });
    });
    console.log('ob');
    console.log(ob);

    // 通常のHttp
    // this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
    //   this.mydata = result;
    // });

    // fetch('assets/data.json').then((resp) => {
    //   resp.json().then((val) => {
    //     this.mydata = val;
    //   });
    // });
  }

  get(n: number) {
    return this.mydata.list[n];
  }

  updateData(f: boolean) {
    this.client
      .get<MyData>('assets/data.json')
      .pipe(
        map((res: MyData) => {
          return f ? res : null;
        })
      )
      .subscribe((result) => {
        if (result != null) {
          this.mydata = result;
        } else {
          this.mydata = new MyData();
        }
      });
  }

  get size() {
    return this.list.length;
  }

  get data() {
    return this.mydata.data;
  }

  get list() {
    return this.mydata.list.filter((v, k) => {
      return k % 2 == 0 ? true : false;
    });
  }
}
