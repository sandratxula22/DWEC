import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) {
   }

  retornar(): Observable<any> {
    return this.http.get<any>('/tareas.json');
  }
}
