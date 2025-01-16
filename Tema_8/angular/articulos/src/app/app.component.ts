import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  articulos = [{ codigo: 1, descripcion: 'papas', precio: 10.55 },
  { codigo: 2, descripcion: 'manzanas', precio: 12.1 },
  { codigo: 3, descripcion: 'melon', precio: 52.3 },
  { codigo: 4, descripcion: 'cebollas', precio: 17 },
  { codigo: 5, descripcion: 'repollo', precio: 20 }];

  borrar(codigo: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == codigo) {
        this.articulos.splice(i, 1);
      }
    }
  }

}
