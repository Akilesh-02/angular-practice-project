import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DateComponent,
    AddressCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
