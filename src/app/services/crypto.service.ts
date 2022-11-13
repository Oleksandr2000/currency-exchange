import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { CurrencyRate } from './currency.service';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<CurrencyRate[]> {
    return this.http
      .get<CurrencyRate[]>(
        'https://rest.coinapi.io/v1/assets?apikey=8381b5ba-002e-4a86-8e72-7ae91fbb3306&filter_asset_id=BTC,ETH,XRP,ETC,SOL,DOT'
      )
      .pipe(delay(1000));
  }
}
