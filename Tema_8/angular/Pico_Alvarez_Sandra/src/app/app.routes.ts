import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareasUsuarioComponent } from './tareas-usuario/tareas-usuario.component';

export const routes: Routes = [
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'tareas',
        component: TareasComponent
    },
    {
        path: 'usuario/tareas-usuario/:id',
        component: TareasUsuarioComponent
    },
    {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'usuarios',
        pathMatch: 'full'
    }
];
