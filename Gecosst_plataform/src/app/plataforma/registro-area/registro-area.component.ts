import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BarraHerramientasComponent } from "../barra-herramientas/barra-herramientas.component";
import { CommonModule } from '@angular/common';
import { area } from '../../entidades/area';
import { FormsModule } from '@angular/forms';
import { AreaServiceService } from '../../servicios/servicios-externos/area-service.service';
import { After } from 'node:v8';

@Component({
  selector: 'app-registro-area',
  standalone: true,
  imports: [BarraHerramientasComponent, CommonModule, FormsModule],
  templateUrl: './registro-area.component.html',
  styleUrl: './registro-area.component.css'
})
export class RegistroAreaComponent implements OnInit, AfterViewInit {


  constructor(private serArea: AreaServiceService) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

    this.botones_barra = false;
    this.lista_areas();
  }



  botones_barra = false;

  objeto_area!: area;
  area: area = new area();

  lista_nombres_areas: string[][] = [];

  id_seleccionado: number = 0;

  habilitar_btn_modificar = true;

  buscar_area() {

    this.serArea.buscar_por_id(this.id_seleccionado).subscribe(
      (data) => {
        this.area = data;
        this.vista_botones()
      },
      error => {
        console.log("Error al buscar el area")
        console.log(error)
      }
    )

  }


  vista_botones() {
    this.botones_barra = true;
  }

  cambio_botones_modificar() {

    if (this.botones_barra == true) {
      this.habilitar_btn_modificar = false;
    }

  }

  volver_vista_anterior() {

    this.botones_barra = false;
    this.habilitar_btn_modificar = true;
    this.id_seleccionado = 0;
    this.limpiar_formulario();
  }

  enviar_datos() {

    this.serArea.agregar(this.area, 2).subscribe(

      (data) => {

        if (data == true) {
          console.log("Area agregada correctamente")

          this.lista_nombres_areas = [];
          this.lista_areas();
          this.limpiar_formulario();
        } else {
          console.log("Error al agregar el area")
        }
      }, error => {
        console.log("Error al agregar el area")
        console.log(error)
      })



  }

  actualizar_datos() {

    this.serArea.modificar(this.area).subscribe(
      (data) => {

        if (data == true) {
            console.log("Area actualizada correctamente")
          this.lista_nombres_areas = [];
          this.lista_areas();

          this.volver_vista_anterior();
        } else {
          console.log("Error al actualizar el area")
        }
      },
      error => {
        console.log("Error al actualizar el area")
        console.log(error)
      }
    )



  }

  eliminar_area() {

    this.serArea.eliminar_por_id(this.area.idArea).subscribe(
      (data) => {

        if (data == true) {
          this.limpiar_formulario();
          this.botones_barra = false;
          this.habilitar_btn_modificar = true;
          this.lista_nombres_areas = [];
          this.lista_areas();
          console.log("Area eliminada correctamente")
        } else {
          console.log("Error al eliminar el area")
        }
      },
      error => {
        console.log("Error al eliminar el area")
        console.log(error)
      }
    )

  }

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

  limpiar_formulario() {
    this.area = new area();

  }

}
