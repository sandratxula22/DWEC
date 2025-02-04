import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tareas: any;
  id:number = 0;
  usuarios: any = [];

  constructor(private tareasService: TareasService, private usuariosService: UsuariosService){
    this.tareasService.retornar().subscribe(result => {
      this.tareas = result
    });
  }
  
  buscarUsuario(id: number){
    this.usuariosService.getUsuarios().subscribe(result => {
      this.usuarios = result;
      for(let i=0;i<this.usuarios.lenght;i++){
        if(id == this.usuarios[i].id){
          return this.usuarios[i];
        }
      }
    })
  }
}
