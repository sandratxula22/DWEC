import { Component, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cronometro',
  imports: [NgStyle],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
  segundo = 0;
  @Input() inicio: number = 0;
  @Output() multiplo10 = new EventEmitter<number>();
  color = 'blue';
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit() {
    let cronometro = this.element.nativeElement.querySelector(".cronometro");
    this.segundo = this.inicio;
    setInterval(() => {
      this.renderer.setAttribute(cronometro, 'title', 'cronometro');
      if(this.segundo%2 == 0){
        this.renderer.setStyle(cronometro, 'backgroundColor', 'red');
      }else{
        this.renderer.setStyle(cronometro, 'backgroundColor', 'blue');
      }
      this.segundo++;
      if (this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo);
    }, 1000);
  }

  
}