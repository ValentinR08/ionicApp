import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentesModule } from '../../componentes/componentes.module';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule, ComponentesModule]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
