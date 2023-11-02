import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  private titulo="Restaurantes"
  private restaurantes =[
    {
      id: '1',
      title: 'El Celler de Can Roca',
      imageURL: 'http://comercioymarketing.es/wp-content/uploads/2016/11/can-roca-logo.png',
      comments: ['aaa']
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
