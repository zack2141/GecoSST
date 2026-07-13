import { Component, OnInit } from '@angular/core';
import { BarraHerramientasComponent } from "../barra-herramientas/barra-herramientas.component";
import { CommonModule } from '@angular/common';
import { area } from '../../entidades/area';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-area',
  standalone: true,
  imports: [BarraHerramientasComponent, CommonModule,FormsModule],
  templateUrl: './registro-area.component.html',
  styleUrl: './registro-area.component.css'
})
export class RegistroAreaComponent implements OnInit {



  ngOnInit(): void {

    this.botones_barra= false;
    
  }

  botones_barra= false;

  objeto_area!: area;
  area:area = new area();


  buscar_area(){

    this.vista_botones()
  }


  vista_botones(){
    this.botones_barra= true;
  }


  enviar_datos(){

    
    
  }

}
