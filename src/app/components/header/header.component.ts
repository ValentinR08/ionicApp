import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class HeaderComponent  implements OnInit {
  @Input() titulo: string = '';
  @Input() defaultHref: string = '/'; // Ruta por defecto
  @Input() backText: string = 'Regresar'; // Texto del botón
  @Input() backColor: string = 'success'; // Color del botón
  @Input() translucent: boolean = true; // Translucidez del header
  constructor() { }

  ngOnInit() {}

}
