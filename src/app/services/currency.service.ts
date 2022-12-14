import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

export interface CurrencyRate {
  r030?: number;
  txt: string;
  rate: number;
  cc?: string;
  exchangedate?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<CurrencyRate[]> {
    return this.http
      .get<CurrencyRate[]>(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
      )
      .pipe(delay(1000));
  }
}
