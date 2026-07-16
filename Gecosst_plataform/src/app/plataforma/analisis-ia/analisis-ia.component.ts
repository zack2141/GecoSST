import { Component, OnInit } from '@angular/core';
import { BarraHerramientasComponent } from '../barra-herramientas/barra-herramientas.component';
import { CommonModule } from '@angular/common';
import { AreaServiceService } from '../../servicios/servicios-externos/area-service.service';
import { FormsModule } from '@angular/forms';
import { IAService } from '../../servicios/servicios-externos/ia.service';

@Component({
  selector: 'app-analisis-ia',
  standalone: true,
  imports: [BarraHerramientasComponent, CommonModule, FormsModule],
  templateUrl: './analisis-ia.component.html',
  styleUrl: './analisis-ia.component.css'
})
export class AnalisisIAComponent implements OnInit {



  ngOnInit(): void {

    this.lista_areas()

  }

  constructor(private serArea: AreaServiceService, private serIA: IAService) { }



  lista_nombres_areas: string[][] = [];
  habilitar_btn_guardado = true;

  habilitar_btn_analizar = true;

  response_ia:string="";

  area_id:number=0;
  analisis:string="";
  adicionales:string="";

  lista_areas() {

    this.serArea.lista_area().subscribe(
      (data) => {

        for (let i = 0; i < data.length; i++) {
          this.lista_nombres_areas.push([data[i][0], data[i][1]])
        }
        console.log(this.lista_nombres_areas)
      },
      error => {
        console.log("Error al obtener las areas")
        console.log(error)
      }
    )

  }

  respuesta_ia() {

    if(this.analisis== "" || this.analisis== "Seleccione un tipo de analisis a realizar" || this.analisis == null){
      this.analisis = "NAA";
    }


    if(this.adicionales== "" || this.adicionales== null){
      this.adicionales = "NAA";
    }
    const el = document.getElementById("respuesta");
    if(el != null){
      el.innerHTML="<h2>Analizando...</h2>";
    }

    this.serIA.respuesta_ai(this.area_id,this.analisis,this.adicionales).subscribe(
      (data) => {
        console.log(data)

        this.response_ia=data;
        
        if(el != null){
          el.innerHTML="<h3>Respuesta de la IA</h3> <br> <p>"+this.response_ia+"</p>";
        }
      },
      error => {
        console.log("Error al obtener la respuesta de la IA")
        console.log(error)
      }
    )
    
  }


  Analizar_IA() {


    if (this.habilitar_btn_analizar) {
      this.habilitar_btn_analizar = false;

    } else {
      this.habilitar_btn_analizar = true;
    }

  }

  habilitar_btn_save() {

    if (this.habilitar_btn_guardado) {
      this.habilitar_btn_guardado = false;

    } else {
      this.habilitar_btn_guardado = true;
    }

  }



}
