import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MycheckService2Service {
  private data: string[];

  constructor() {
    this.data = [];
  }

  push(item: string) {
    this.data.push(item);
  }

  pop() {
    this.data.pop();
  }

  get(n: number) {
    return this.data[n];
  }

  get size() {
    return this.data.length;
  }

  get json() {
    return JSON.stringify(this.data);
  }

  get list() {
    return JSON.parse(JSON.stringify(this.data));
  }
}
