import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentesModule } from '../../componentes/componentes.module';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
  imports: [CommonModule, RouterModule, IonicModule, ComponentesModule],
})
export class ChipPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
