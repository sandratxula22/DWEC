import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'boot-barrademenu',
  imports: [],
  templateUrl: './barrademenu.component.html',
  styleUrl: './barrademenu.component.css'
})
export class BarrademenuComponent {
  @Input() opciones!: string[];
  @Input() colorfondo!: string;
  @Output() presionopcion = new EventEmitter();

  presion(i: number): void {
    this.presionopcion.emit(i);
  }
}