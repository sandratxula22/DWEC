import { Routes } from '@angular/router';
import { TablanroComponent } from './tablanro/tablanro.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
{
    path: "",
    component: InicioComponent
},
{
    path: "tabla/:nro",
    component: TablanroComponent
},
{
    path: 'pagina404',
    component: Pagina404Component
},
{
    path: '**',
    redirectTo: 'pagina404'
}];