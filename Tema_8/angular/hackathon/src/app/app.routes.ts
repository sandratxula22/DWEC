import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'usuario/:id',
        component: UsuarioDetalleComponent
    },
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
