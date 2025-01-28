import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarrademenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones = [
    "Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4", "Opcion 5"
  ];

  presion(op: number) {
    alert("Se informa que se presiono la opcion " + op);
  }
}