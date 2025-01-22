import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidacionesPropias } from './validaciones-propias';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado='';

  formularioContacto = new FormGroup({
    nombre: new FormControl('Sandra', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  formularioContacto2 = new FormGroup({
    numero: new FormControl('', [ValidacionesPropias.multiplo5])
  });

  submit2() {
    alert('dato correcto');
  }
}