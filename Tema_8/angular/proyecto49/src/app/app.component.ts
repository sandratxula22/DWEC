import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArchivoService } from './archivo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto49';
  nombreArchivo = '';
  resultado: any;

  constructor(private archi: ArchivoService) { }

  async recuperarConPromise(event: any) {
    try {
      this.resultado = await this.archi.recuperarConPromesa(event.target.files[0]);
    } catch (error) {
      this.resultado = error
    }
  }

  recuperarConObservable(event: any) {
    this.archi.recuperarConObservable(event.target.files[0]).subscribe({
      next: (resultado) => {
        this.resultado = resultado;
      },
      error: (error) => {
        this.resultado = error;
      }
    });
  }
}
