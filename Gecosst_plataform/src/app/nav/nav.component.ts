import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraNavegaciónService } from '../servicios/servicios-internos/barra-navegación.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './nav_responsivo_completo.css']
})
export class NavComponent implements OnInit{

  constructor(private router: Router,  private servicio_barra: BarraNavegaciónService, private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

  ver_navegacion:string='';

   logueo(){

    this.servicio_barra.tiponav$.subscribe(dato =>{
      this.ver_navegacion= dato;
      this.cdRef.detectChanges() // verifica los cambios realizadons durante la navegación
    })

  }
    redirecciona_inicio_sesion(){
    this.router.navigate(['/inicio_sesion']);


    
  }

 


}
