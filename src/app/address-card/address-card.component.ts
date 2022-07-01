import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input('name') selectorName: string;

  constructor() {}

  ngOnInit() {
    this.user = {
      name: 'Akilesh',
      company: 'Capgemini',
      anotherName: 'selectorName',
      phoneNumbers: ['974346', '812327'],
    };
  }
}
