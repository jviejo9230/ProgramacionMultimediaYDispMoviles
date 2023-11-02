import { Injectable } from '@angular/core';
import { restaurante } from './restaurantes.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  private restaurantes: restaurante[] =[
    {
      id: '1',
      title: 'El Celler de Can Roca',
      imageURL: './assets/logoElCeller.png',
      descripcion: 'La pasión por la cocina que sienten los hermanos Roca empezó a forjarse en Can Roca, el establecimiento que sus padres regentan en Taialà, un barrio en las afueras de Girona. Allí crecieron, en medio del bullicio de platos, ollas y clientes. El bar era su salón, el paisaje donde jugaban, hacían los deberes escolares, miraban la televisión… a la vez que, desde la cocina, surgían aromas de los guisos que su madre preparaba de forma generosa, sencilla y honesta.',
      tenedores: './assets/3tenedores.jpg',
      comments: ['']
    },
    {
      id: '2',
      title: 'La Choza de Manuela',
      imageURL: './assets/choza.jpg',
      descripcion: 'Para nosotros es un placer mostrarles nuestras instalaciones y nuestros platos más destacados. Ofrecemos una gran variedad en carnes a la brasa, pescados, guisos, postres y otros tipos de platos para que salgáis satisfechos de nuestro establecimiento. Desde 1996 estamos a vuestra disposición y desde La Choza de Manuela queremos agradeceros vuestra confianza ofreciendo el mejor servicio y la mejor calidad en nuestros platos. ¡Gracias por ser fieles tantos años!',
      tenedores: './assets/1tenedor.jpg',
      comments: ['']
    },
    {
      id: '3',
      title: 'Sevruga',
      imageURL: './assets/sevruga.jpg',
      descripcion: 'Sevruga Restaurante comienza su singladura a finales del año 2004 con la idea de ofrecer a sus clientes un marco incomparable donde se conjugan una extraor- dinaria gastronomí­a con una vistas de extrema belleza a las orillas de nuestro querido Rí­o Guadalquivir a su paso por la villa de Coria del Rí­o. Prácticamente frente al paso de las carretas del Rocío, se alza nuestro restaurante con amplios y luminosos ventanales al Guadalquivir y una selecta variedad de platos que a buen seguro satisfarán los gustos más exquisitos de nuestros clientes. No desaproveche la oportunidad de disfrutar de una magnifica experiencia gastronómica disfrutando de agradables paisajes, merece la pena.',
      tenedores: './assets/2tenedores.jpg',
      comments: ['']
    },
    {
      id: '4',
      title: 'DiverXO',
      imageURL: './assets/diverxo.jpg',
      descripcion: 'DiverXO es un local de alta cocina, de fusión, de experimentación, que ofrece dos experiencias culinarias tan solo diferenciadas por la cantidad de comida y número de platos : el "XOW" y el "XEF". Una cocina única marcada por sensaciones muy intensas y creatividad pura, una cocina compleja, llena de matices, diferente, en la que se entremezclan todos los sabores.',
      tenedores: './assets/3tenedores.jpg',
      comments: ['']
    }
  ]

  constructor() { }

  getRestaurantes(){
    return [...this.restaurantes]
  }

  getRestaurante(restauranteID: string | null): restaurante{
    return{
      ...this.restaurantes.find(restaurante => {
        return restaurante.id === restauranteID
      })
    }
  }

  addRestaurante(){}

  deleteRestaurante(){}
}
