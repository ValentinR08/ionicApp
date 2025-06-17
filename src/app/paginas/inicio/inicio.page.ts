import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface structList{
  nombre: string;
  redirectTo: string;
  icon?: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule], //cambios para que funcione
  
})
export class InicioPage implements OnInit {

  Elementos: structList[] = [
    { nombre: 'Alert', redirectTo: '/alert' , icon:'alert-outline'},
    { nombre: 'Card', redirectTo: '/card', icon: 'id-card-outline'  },
    { nombre: 'Checkbox', redirectTo: '/checkbox', icon: 'checkbox-outline'},
    { nombre: 'Chip', redirectTo: '/chip', icon: 'hardware-chip-outline' },
    { nombre: 'Fab', redirectTo: '/fab', icon: 'add-circle-outline' },
    { nombre: 'datetime', redirectTo: '/datetime', icon: 'date-time-outline' },

  ];
    

  constructor() { }

  ngOnInit() {
  }

}
