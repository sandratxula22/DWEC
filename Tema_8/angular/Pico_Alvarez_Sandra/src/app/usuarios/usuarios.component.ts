import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidacionesPropias } from '../validaciones-propias';


@Component({
  selector: 'app-usuarios',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: any;

  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, ValidacionesPropias.masDeTres])
  });

  constructor(private usuariosService: UsuariosService){
    this.usuarios = [];
  }

  ngOnInit(){
    this.usuariosService.getUsuarios().subscribe(response => {
      this.usuarios = response;
      console.log(response);
    });
  }

  onAddUser(){
    const nuevoUser = this.addUserForm.value;
    console.log(nuevoUser);
    this.usuarios.push({
      id: this.usuarios.length + 1,
      nombre: nuevoUser.name
    })
  }
}
