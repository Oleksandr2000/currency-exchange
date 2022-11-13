import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { InputComponent } from './components/Input/input.component';
import { SelectComponent } from './components/Select/select.component';
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [CurrencyService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
