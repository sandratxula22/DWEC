import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  comprobar(credentials: Login) {
    const api = 'https://reqres.in/api/login';
    return this.http.post(api, credentials);
  }
}
