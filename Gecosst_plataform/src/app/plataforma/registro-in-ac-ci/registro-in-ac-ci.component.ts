import { Component } from '@angular/core';
import { BarraHerramientasComponent } from '../barra-herramientas/barra-herramientas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-in-ac-ci',
  standalone: true,
  imports: [ BarraHerramientasComponent, CommonModule],
  templateUrl: './registro-in-ac-ci.component.html',
  styleUrl: './registro-in-ac-ci.component.css'
})
export class RegistroInAcCiComponent {

}
