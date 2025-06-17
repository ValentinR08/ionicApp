import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';
import { AlertController,IonButton, IonAlert } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule, ComponentesModule], // modulos para que funcione 
  
})



export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }
  
  ngOnInit() {
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Esto es una alerta sin trigger.',
      buttons: ['OK'],
    });
    await alert.present();
  };
  async showAlertPersonalizada(){
   const alertPerzonalizada = await this.alertController.create({
      backdropDismiss: false, //forzar que no se cierre la alerta, sin elegir una opcion
      header: '¿Que quieres hacer con tu Producto?',
      subHeader: 'Soy algo referente al producto que debes de elegir',
      message: 'Selecciona una opcion',
      
      
      buttons: [{
        text: 'Guardar',
        role: 'success',
        handler: () => {
          console.log('Guardar');
        },
        
      },
      {
        text: 'Borrar',
        role: 'danger',
        handler: () => {
          console.log('Borrar');
        },
      },
      {
        text:'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        },
      
      }
    ]
    });
    await alertPerzonalizada.present();
  };

 
  public alertInputs = [
    {
      placeholder: 'Nombre',
      type: 'string'
    },
    {
      placeholder: 'Apellido Paterno ',
      attributes: {
        maxlength: 8,
      },
      type:'string'
    },
    {
        placeholder: 'Apellido Materno',
        type: 'string'
    },
    {
      type: 'string',
      placeholder: 'edad',
    }
  ];
  public alertButtons = [{
    text:'OK',
    handler: (data:any) => {
      console.log( data);
    }
  
  }];

  public ConsoleButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

}
