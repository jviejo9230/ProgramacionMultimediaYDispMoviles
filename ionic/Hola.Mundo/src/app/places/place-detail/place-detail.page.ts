import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PlacesService } from '../places.service';
import {place} from '../place.model'
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})


export class PlaceDetailPage implements OnInit {
 
// Definimos la variable "miplace" que contendrá el lugar que ha pulsado el usuario: 
//se pone como tipo "place" y debe inicializarse:  
place: place = {id:'',title:'',imageURL:'',comments:[]};

// En el constructor ponemos todas as variables instanciables, una para acceder a la clase ActivatedRoute y otra
// para acceder a la clase de nuestro servicio "PlacesService"
constructor(private activatedRoute: ActivatedRoute,
    private placesservice:PlacesService, private router: Router, private alertCtrl: AlertController) { }

    // Método que se ejecuta cada vez que se entra en esta página:
  ngOnInit() {
    //Llamada asíncrona, cuando termina la llamada se ejecuta el código que está dentro de las llaves y devuelve
    // el valor en el parámetro de entrada "paramMap":
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeID');
      console.log(recipeId);
      this.place=this.placesservice.getPlace(recipeId); //Llamamos al servicio que devuelve el lugar seleccionado pasándole el id como parámetro de entrada.
    })
  }

  /**
   * deletePlace() --> Delete actual place
   */
  async deletePlace()
  { 
    const element = await this.alertCtrl.create (
      {
        header:'¿Estas seguro de que quieres borrar este sitio?',
        message: 'Ten cuidado',
        buttons:
        [
          {
            text:'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: () => {
              this.placesservice.deletePlace(this.place.id);
              this.router.navigate(['/places']); //Para que cuando borre vaya a la pagina anterior
            }
          }
        ]
      }
    );
    await element.present();
  }
}
