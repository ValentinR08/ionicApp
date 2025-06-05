import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentesModule } from 'src/app/componentes/componentes.module';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, ComponentesModule, FormsModule],
  
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
