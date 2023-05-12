import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
      this.mydata = result;
    });
  }

  get(n: number) {
    return this.mydata.list[n];
  }

  get size() {
    return this.list.length;
  }

  get data() {
    return this.mydata.data;
  }

  get list() {
    return this.mydata.list;
  }
}
