import { Routes } from '@angular/router';
import { EuropaComponent } from './europa/europa.component';
import { EspanaComponent } from './europa/espana/espana.component';
import { FranciaComponent } from './europa/francia/francia.component';
import { ItaliaComponent } from './europa/italia/italia.component';
export const routes: Routes = [
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
      {
        path: 'espana',
        component: EspanaComponent
      },
      {
        path: 'francia',
        component: FranciaComponent
      },
      {
        path: 'italia',
        component: ItaliaComponent
      }
    ]
  }
];