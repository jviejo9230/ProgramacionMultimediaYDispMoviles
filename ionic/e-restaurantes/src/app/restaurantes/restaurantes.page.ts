import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from './restaurantes.service';
import {restaurante} from './restaurantes.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  titulo: string ="Restaurantes"
  restaurantes: restaurante[]=[];


  constructor(private restauranteService : RestaurantesService) { }

  ngOnInit() {
    this.restaurantes=this.restauranteService.getRestaurantes();
  }
}
