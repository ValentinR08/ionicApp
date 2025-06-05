import { Component, OnInit } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule, ComponentesModule], // modulos para que funcione 
  
})

export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
