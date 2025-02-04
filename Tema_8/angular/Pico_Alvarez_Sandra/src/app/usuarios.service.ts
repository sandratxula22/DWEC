import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[];

  constructor(private http: HttpClient) { 
    this.usuarios = [
      {
        id: 1,
        nombre: "Laura"
      },
      {
        id: 2,
        nombre: "Raquel"
      },
      {
        id: 3,
        nombre: "Ana Gloria"
      }
    ]
  }

  getUsuarios(): Observable<any>{
    return this.http.get<any>("/usuarios.json");
  }
}
