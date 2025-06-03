import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  imports: [CommonModule, IonicModule,RouterModule], 
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
