import { Component, Input } from '@angular/core';
import { CurrencyRate } from 'src/app/services/currency.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent {
  firstCurrencyValue: number;
  secondCurrencyValue: number;
  isChangedFirstValue: boolean = false;
  isChangedSecondValue: boolean = false;

  firstCurrency: number;
  secondCurrency: number;

  @Input()
  loading: boolean = true;

  @Input()
  data: CurrencyRate[];

  @Input()
  title: string;

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
