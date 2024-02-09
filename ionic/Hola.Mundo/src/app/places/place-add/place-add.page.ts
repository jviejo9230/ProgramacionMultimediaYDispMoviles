import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  titulo_pagina: string = "Añadir nuevo lugar"
  holder_titulo: string = "Escribe un titulo"
  holder_image: string = "Escribe la url de la imagen"
  text_button_save: string="Añadir"

  constructor(private placeservice: PlacesService,
    private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title:IonInput, image:IonInput){
    this.placeservice.addPlace(title.value?.toString(), image.value?.toString());
    this.router.navigate(['/places'])
  }
}
