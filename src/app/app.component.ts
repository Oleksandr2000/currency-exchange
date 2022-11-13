import { Component, OnInit } from '@angular/core';
import { CryptoService } from './services/crypto.service';
import { CurrencyRate, CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  dataCurrencyRate: CurrencyRate[];
  dataCryproCurrencyRate: CurrencyRate[];
  loadingCurrency: boolean = true;
  loadingCrypto: boolean = true;
  eurCurrentRate: number;
  usdCurrentRate: number;

  constructor(
    private currencyService: CurrencyService,
    private cryptoService: CryptoService
  ) {}

  ngOnInit() {
    this.currencyService.getAll().subscribe((data: CurrencyRate[]) => {
      this.dataCurrencyRate = data;
      this.loadingCurrency = false;

      this.eurCurrentRate = data.filter((item) => item.cc == 'EUR')[0].rate;

      this.usdCurrentRate = data.filter((item) => item.cc == 'USD')[0].rate;
    });

    this.cryptoService.getAll().subscribe((data: any) => {
      this.dataCryproCurrencyRate = data.map((item: any) => {
        return {
          txt: item.name,
          rate: item.price_usd,
        };
      });
      this.loadingCrypto = false;
    });
  }
}
