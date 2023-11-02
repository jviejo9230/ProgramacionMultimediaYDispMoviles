import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor() { }

  getRestaurantes(){
    return [...this.restaurantes]
  }

  getRestaurante(restauranteID: string){
    return{
      ...this.restaurantes.find(restaurante => {
        return restaurante.id==restauranteID
      })
    }
  }

  addRestaurante(){}

  deleteRestaurante(){}
}
