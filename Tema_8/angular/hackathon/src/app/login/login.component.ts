import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Login;

  FormularioLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private login: LoginService, private router: Router) {
    this.usuario = { email: '', password: ''}
  }

  onSubmit() {
    if (this.FormularioLogin.valid) {
      //const { email, password } = this.FormularioLogin.value;
      //this.usuario = { email: ''+this.FormularioLogin.value.email, password: ''+this.FormularioLogin.value.password } ;
      const email = this.FormularioLogin.value.email;
      const password = this.FormularioLogin.value.password;
      if(email != undefined && email != null){
        this.usuario.email = email;  
      }
      if(password != undefined && password != null){
        this.usuario.password = password;
      }
      this.login.comprobar(this.usuario).subscribe({
        next: (result) => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
        }
      })
    }else{
      console.log()
    }
  }

  

}
