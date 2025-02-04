import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  usuario;

  constructor(private http: HttpClient) { 
    this.usuario = {
      name: '',
      job: ''
    }
  }

  getUsuarios(): Observable<any>{
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }

  getUsuariosById(id: string): Observable<any>{
    return this.http.get<any>("https://reqres.in/api/users/"+id);
  }

  addUser(usuario: any): Observable<any>{
    return this.http.post<any>("https://reqres.in/api/users", usuario);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }
  
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`https://reqres.in/api/users/${id}`, data);
  }  
}
