import { Component, DoCheck, OnInit } from '@angular/core';
import { currencyRate, CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, DoCheck {
  data: currencyRate[];
  loading: boolean = true;
  firstCurrency: number;
  secondCurrency: number;
  firstCurrencyValue: number;
  secondCurrencyValue: number;
  isChangedFirstValue: boolean = false;
  isChangedSecondValue: boolean = false;
  eurCurrentRate: number;
  usdCurrentRate: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getAll().subscribe((data: currencyRate[]) => {
      console.log(data);
      this.data = data;
      this.loading = false;

      this.firstCurrency = this.data[0].rate;

      this.secondCurrency = this.data[0].rate;

      this.eurCurrentRate = data.filter((item) => item.cc == 'EUR')[0].rate;
      this.usdCurrentRate = data.filter((item) => item.cc == 'USD')[0].rate;
    });
  }

  ngDoCheck() {
    if (this.isChangedFirstValue) {
      this.handlerFirstRate();
    }
    if (this.isChangedSecondValue) {
      this.handlerSecondRate();
    }
  }

  saveFirstValue(value: number) {
    this.firstCurrencyValue = value;
    this.isChangedFirstValue = true;
    this.isChangedSecondValue = false;
  }

  saveSecondValue(value: number) {
    this.secondCurrencyValue = value;
    this.isChangedFirstValue = false;
    this.isChangedSecondValue = true;
  }

  saveFirstCurrency(value: number) {
    this.firstCurrency = value;
  }

  saveSecondCurrency(value: number) {
    this.secondCurrency = value;
  }

  handlerFirstRate() {
    const calculatingValue =
      (this.firstCurrency * this.firstCurrencyValue) / this.secondCurrency;

    this.secondCurrencyValue = Number(calculatingValue.toFixed(2));
  }

  handlerSecondRate() {
    const calculatingValue =
      (this.secondCurrency * this.secondCurrencyValue) / this.firstCurrency;

    this.firstCurrencyValue = Number(calculatingValue.toFixed(2));
  }
}
