import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloroute',
  templateUrl: './helloroute.component.html',
  styleUrls: ['./helloroute.component.css'],
})
export class HellorouteComponent implements OnInit {
  title: string;
  message: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-Route';
    this.message = 'sample message';
  }
}
