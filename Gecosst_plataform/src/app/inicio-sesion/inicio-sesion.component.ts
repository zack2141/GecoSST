import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {

  constructor(private router: Router) { }

  validar_credenciales(){


    this.ingreso_plataforma()
    
  }

  ingreso_plataforma(){

    this.router.navigate(['/plataforma/dashboard'])

  }


}
