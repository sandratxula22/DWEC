import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Usuario } from '../usuario';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  imports: [RouterLink],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent {
  usuario!: Usuario;
  id: string = "";

  constructor(private homeServicio: HomeService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get("id") ?? "1";
    })

    this.homeServicio.getUsuariosById(this.id).subscribe((response) => {
      this.usuario = response.data
      console.log(response.data);
    })
  }
  
}
