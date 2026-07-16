import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarraNavegaciónService } from '../../servicios/servicios-internos/barra-navegación.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-herramientas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './barra-herramientas.component.html',
  styleUrl: './barra-herramientas.component.css'
})
export class BarraHerramientasComponent {

  constructor(private router: Router, private servicio_barra:BarraNavegaciónService) {}

  ngOnInit(): void {

  }

  navegador_plataforma(){
    this.servicio_barra.setTipoNav('plataforma');
  }

  redireccionar_Registro_Area(){

    this.router.navigate(['/plataforma/registro-area']);
  }

  redireccionar_Analisis_IA(){
    this.router.navigate(['/plataforma/analisis-ia']);
  }

  redireccionar_dashboard(){
    this.router.navigate(['/plataforma/dashboard']);
  }

  redireccionar_Reportes(){
    this.router.navigate(['/plataforma/reportes']);
  }

  redireccionarDescargas(){}

}
