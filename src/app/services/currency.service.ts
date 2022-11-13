import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

export interface currencyRate {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<currencyRate[]> {
    return this.http
      .get<currencyRate[]>(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      )
      .pipe(delay(1000));
  }
}
