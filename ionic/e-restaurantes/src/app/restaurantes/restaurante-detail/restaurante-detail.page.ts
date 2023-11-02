import { Component, OnInit } from '@angular/core';
import { restaurante } from '../restaurantes.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.page.html',
  styleUrls: ['./restaurante-detail.page.scss'],
})

export class RestauranteDetailPage implements OnInit {

  restaurante: restaurante = {id:'',title:'',imageURL:'', descripcion: '',comments:[]};

  constructor(private activatedRouted: ActivatedRoute, private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    //Llamada asíncrona, cuando termina la llamada se ejecuta el código que está dentro de las llaves y devuelve
    // el valor en el parámetro de entrada "paramMap":
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('restauranteID');
      console.log(recipeId);
      this.restaurante=this.restaurantesService.getRestaurante(recipeId); //Llamamos al servicio que devuelve el lugar seleccionado pasándole el id como parámetro de entrada.
    })
  }

}
