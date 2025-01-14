import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  //@Input() valor: string = "";
  @Input() valor: number=1;
}
