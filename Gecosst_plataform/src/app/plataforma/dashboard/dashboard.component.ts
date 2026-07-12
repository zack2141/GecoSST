import { Component } from '@angular/core';
import { BarraHerramientasComponent } from '../barra-herramientas/barra-herramientas.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BarraHerramientasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
