import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private login: LoginService){}

  onSubmit(event: Event){
    event.preventDefault();
    console.log('Formulario enviado');
    this.login.comprobar().subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (result) => {
        console.log(result);
      }
    })
  }
}
