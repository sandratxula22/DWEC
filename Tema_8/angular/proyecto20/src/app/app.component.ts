import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articulos: any;

  constructor(private articulosService: ArticulosService) {
    this.articulosService.retornar()
      .subscribe(result => this.articulos = result)
  }

}