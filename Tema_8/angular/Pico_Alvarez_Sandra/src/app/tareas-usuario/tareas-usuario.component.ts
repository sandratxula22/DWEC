import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { TareasService } from '../tareas.service';
import { Usuario } from '../usuario';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';


@Component({
  selector: 'app-tareas-usuario',
  imports: [RouterLink],
  templateUrl: './tareas-usuario.component.html',
  styleUrl: './tareas-usuario.component.css'
})
export class TareasUsuarioComponent {
  usuarios: Usuario[] = [];
  id: any = "";
  tareas: any;

  constructor(private tareasService: TareasService, private activatedRoute: ActivatedRoute, private usuariosService: UsuariosService){}

  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.id = parametros.get("id") ?? "1";
    })
    console.log(this.id);

    this.tareasService.retornar().subscribe((response) => {
      this.tareas = response;
    })

    this.usuariosService.getUsuarios().subscribe((response) => {
      this.usuarios = response;
    })
  }
}
