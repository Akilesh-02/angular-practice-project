import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  dateMessage: String;

  constructor() {
    setInterval(() => {
      let date = new Date();
      this.dateMessage = date.toDateString() + ' ' + date.toLocaleTimeString();
    }, 1000);
  }

  addNumbers(a: number, b: number) {
    return a + b;
  }

  ngOnInit() {}
}
