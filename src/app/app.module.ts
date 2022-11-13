import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { InputComponent } from './components/Input/input.component';
import { SelectComponent } from './components/Select/select.component';
import { CurrencyService } from './services/currency.service';
import { CryptoService } from './services/crypto.service';
import { BoardComponent } from './components/Board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    SelectComponent,
    BoardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [CurrencyService, CryptoService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
