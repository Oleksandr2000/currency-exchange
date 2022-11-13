import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyRate } from 'src/app/services/currency.service';

@Component({
  selector: 'custom-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input()
  name: string;
  @Input()
  id: string;
  @Input()
  currencyList: CurrencyRate[];
  @Input()
  value: number;

  @Output()
  outChangeValue = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeValue(event: Event) {
    const target = event.target as HTMLInputElement;

    this.outChangeValue.emit(Number(target.value));
  }
}
