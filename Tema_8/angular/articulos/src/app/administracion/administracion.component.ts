import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administracion',
  imports: [FormsModule],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {
articulos = [{ codigo: 1, descripcion: 'papas', precio: 10.55 },
{ codigo: 2, descripcion: 'manzanas', precio: 12.1 },
{ codigo: 3, descripcion: 'melon', precio: 52.3 },
{ codigo: 4, descripcion: 'cebollas', precio: 17 },
{ codigo: 5, descripcion: 'calabaza', precio: 20 }];

borrar(codigo: number){
  for(let i=0;i<this.articulos.length;i++){
    if(this.articulos[i].codigo == codigo){
      this.articulos.splice(i, 1);
    }
  }
}

}
