import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { HomeService } from '../home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: Usuario[];

  constructor(private homeServicio: HomeService){
    this.usuarios = [];
  }

  ngOnInit(){
    this.homeServicio.getUsuarios().subscribe((response) => {
      console.log(response.data)
      this.usuarios = response.data;
    })
  }
}
