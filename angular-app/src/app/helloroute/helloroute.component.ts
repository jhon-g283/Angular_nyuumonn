import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isEmpty } from 'rxjs';
@Component({
  selector: 'app-helloroute',
  templateUrl: './helloroute.component.html',
  styleUrls: ['./helloroute.component.css'],
})
export class HellorouteComponent implements OnInit {
  title: string;
  message: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = 'Hello-Route';
    console.log('this.route.snapshot');
    console.log(this.route.snapshot);
    if (this.route.snapshot.queryParamMap.getAll.length == 0) {
      this.message = 'params: ' + JSON.stringify(this.route.snapshot.paramMap);
    } else {
      this.message =
        'params: ' + JSON.stringify(this.route.snapshot.queryParamMap);
    }
  }
}
