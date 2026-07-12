import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './barra-herramientas.component.html',
  styleUrl: './barra-herramientas.component.css'
})
export class BarraHerramientasComponent {

  constructor(private router: Router) {}

  redireccionar_Registro_Area(){

    this.router.navigate(['/plataforma/registro-area']);
  }

  redireccionar_Analisis_IA(){}

  redireccionarNotificaciones(){}

  redireccionarDescargas(){}

}
