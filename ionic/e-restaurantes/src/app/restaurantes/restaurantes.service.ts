import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor() { }

  getRestaurantes(){
    return [...this.restaurantes]
  }

  getRestaurante(){}

  addRestaurante(){}

  deleteRestaurante(){}
}
