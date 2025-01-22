import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';

export const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  }
];