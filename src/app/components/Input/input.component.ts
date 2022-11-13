import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  name: string;
  @Input()
  value: number = 0;

  @Output()
  outChangeValue = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeValue(event: Event) {
    const target = event.target as HTMLInputElement;

    this.outChangeValue.emit(Number(target.value));
  }
}
