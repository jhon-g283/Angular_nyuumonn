import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort'; //画面側で使用するコンポーネントであるが型定義のために必要

// 配列のインターフェース作成
export interface People {
  name: string;
  mail: string;
  tel: string;
  age: number;
}

@Component({
  selector: 'app-materialtable',
  templateUrl: './materialtable.component.html',
  styleUrls: ['../material/material.component.css'],
  // styleUrls: ['./materialtable.component.css']
  // angular-app/src/app/material/material.component.css
})
export class MaterialtableComponent implements OnInit {
  message: string;
  data: People[];
  sortedData: People[];
  constructor() {}

  ngOnInit(): void {
    this.data = [
      { name: 'Kirby', mail: 'kirby@ppp', tel: '111-111-111', age: 1 },
      { name: 'DDD', mail: 'ddd@ppp', tel: '121-111-111', age: 12 },
      { name: 'RRR', mail: 'rrr@ppp', tel: '131-111-111', age: 13 },
      { name: 'LLL', mail: 'lll@ppp', tel: '141-111-111', age: 14 },
    ];
    this.sortedData = this.data.slice();
  }

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const asc = sort.direction == 'asc' ? 1 : -1;
      switch (sort.active) {
        case 'name':
          return (a.name < b.name ? 1 : -1) * asc;
        case 'mail':
          return (a.name < b.name ? 1 : -1) * asc;
        case 'tel':
          return (a.name < b.name ? 1 : -1) * asc;
        case 'age':
          return (a.name < b.name ? 1 : -1) * asc;
        default:
          return 0;
      }
    });
  }
}
