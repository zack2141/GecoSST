import { Component, OnInit } from '@angular/core';
import { BarraNavegaciónService } from '../servicios/servicios-internos/barra-navegación.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', './imagenes.css']
})
export class InicioComponent implements OnInit {

  constructor(private servicio_barra:BarraNavegaciónService) {}

  ngOnInit(): void {

  
  }


}
