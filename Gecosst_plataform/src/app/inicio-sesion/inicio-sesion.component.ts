import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarraNavegaciónService } from '../servicios/servicios-internos/barra-navegación.service';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent implements OnInit {

  constructor(private router: Router, private servicio_barra: BarraNavegaciónService) { }

  ngOnInit(): void {
  }

  navegador_plataforma() {
    this.servicio_barra.setTipoNav('none');
  }

  validar_credenciales() {


    this.ingreso_plataforma()

  }

  ingreso_plataforma() {

    this.router.navigate(['/plataforma/dashboard'])

  }


}
