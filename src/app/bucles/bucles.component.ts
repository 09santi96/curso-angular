import { Component } from '@angular/core';
import { Personas } from '../personas';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  personas: Personas[] = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Roberto', edad: 24},
    {nombre: 'Enrique', edad: 18},
    {nombre: 'Maria', edad: 29}
  ];
}
