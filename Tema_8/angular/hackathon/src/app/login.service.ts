import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  comprobar() {
    const api = 'https://reqres.in/api/login';
    const datos = { email: "eve.holt@reqres.in" , password: "sdfsdf" };

    return this.http.post(api, datos);
  }
}
