import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { HomeService } from '../home.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: Usuario[];

  addUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
  });

  constructor(private homeServicio: HomeService, private router: Router){
    this.usuarios = [];
  }

  ngOnInit(){
    this.homeServicio.getUsuarios().subscribe((response) => {
      console.log(response.data)
      this.usuarios = response.data;
    })

    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }
  }

  logout(){
    localStorage.removeItem('token');
  }

  onAddUser(){
    if(this.addUserForm.valid){
      const nuevoUser = this.addUserForm.value;

      this.homeServicio.addUser(nuevoUser).subscribe((response) =>{
        this.usuarios.push({
          id: response.id,
          email: '',
          first_name: response.name,
          last_name: '',
          avatar: ''
        });

        // Limpiar el formulario después de agregar el usuario
        this.addUserForm.reset();
      });
    }
  }
}
