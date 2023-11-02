import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesPage } from './restaurantes.page';

const routes: Routes = [
  {
    path: 'restaurantes',
    children:
  [
    {
      path: '',
      loadChildren: () => import("./restaurantes/restaurantes.module").then(m=>m.RestauratesPageModule)
    },
    {
      path: 'restauranteID',
      loadChildren: () => import('./restaurante-detail/restaurante-detail.module').then( m => m.RestauranteDetailPageModule)
    },
  ]
},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesPageRoutingModule {}
