import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //funciones
  title = 'Proyecto de Sandra';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio = 'http://www.google.com';

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }

  sueldo(mes: number): number | undefined {
    return this.sueldos[mes];
  }
  
  //usos de if, else y switch
  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  }, {
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  }, {
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];

  generarNumero() {
    return Math.floor(Math.random() * 4) + 1;
  }

  //eventos
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  //property binding
  nombre2 = '';

  fijarNombre1() {
    this.nombre2 = 'Juan';
  }

  fijarNombre2() {
    this.nombre2 = 'Ana';
  }
}
