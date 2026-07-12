import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './nav_responsivo_completo.css']
})
export class NavComponent {

  constructor(private router: Router) { }

    redirecciona_inicio_sesion(){
    this.router.navigate(['/inicio_sesion']);
  }
}
