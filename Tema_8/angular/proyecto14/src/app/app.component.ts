import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { ValidacionesPropias } from './validaciones-propias';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioContacto = new FormGroup({
    numero: new FormControl('', [ValidacionesPropias.multiplo5])
  });

  submit() {
    alert('dato correcto');
  }
}