import { Component, OnInit } from '@angular/core';
import { BarraHerramientasComponent } from '../barra-herramientas/barra-herramientas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analisis-ia',
  standalone: true,
  imports: [BarraHerramientasComponent, CommonModule],
  templateUrl: './analisis-ia.component.html',
  styleUrl: './analisis-ia.component.css'
})
export class AnalisisIAComponent implements OnInit{



  ngOnInit(): void {
    
  }

  habilitar_btn_guardado=true;

  habilitar_btn_analizar=true;

  Analizar_IA(){

    
    if(this.habilitar_btn_analizar){
      this.habilitar_btn_analizar = false;
      
    }else{
      this.habilitar_btn_analizar = true;
    }
    
  }

  habilitar_btn_save(){

    if(this.habilitar_btn_guardado){
      this.habilitar_btn_guardado = false;
      
    }else{
      this.habilitar_btn_guardado = true;
    }
    
  }



}
