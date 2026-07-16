import { Component, OnInit } from '@angular/core';
import { BarraHerramientasComponent } from '../barra-herramientas/barra-herramientas.component';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { ReporteCondicionesService } from '../../servicios/servicios-externos/reporte-condiciones.service';
import { reporte } from '../../entidades/reporte';

@Component({
  selector: 'app-registro-in-ac-ci',
  standalone: true,
  imports: [BarraHerramientasComponent, CommonModule],
  templateUrl: './registro-in-ac-ci.component.html',
  styleUrl: './registro-in-ac-ci.component.css'
})
export class RegistroInAcCiComponent implements OnInit {

  listaReportes: reporte[] = [];

  constructor(
    private modalservicio: NgbModal,
    private reporteService: ReporteCondicionesService
  ) { }

  ngOnInit(): void {
    this.cargarReportes();
  }

  cargarReportes(): void {
    this.reporteService.lista_reporte_condiciones().subscribe({
      next: (data) => {
        this.listaReportes = data;
        console.log('Reportes cargados:', data);
      },
      error: (err) => {
        console.error('Error al cargar reportes:', err);
      }
    });
  }

  Abrir_Modal(reporteSeleccionado?: reporte) {
    const modalref = this.modalservicio.open(ModalComponent, {
      size: 'lg',
      backdrop: 'static'
    });

    if (reporteSeleccionado) {
      // Edición: pasamos una copia del reporte para no modificar la lista directamente
      modalref.componentInstance.objeto_reporte = { ...reporteSeleccionado };
    } else {
      // Creación: se crea un nuevo objeto reporte
      modalref.componentInstance.objeto_reporte = new reporte();
    }

    modalref.result.then((result: reporte) => {
      if (result) {
        if (result.idReporte) {
          // Modificación
          this.reporteService.actualizar(result).subscribe({
            next: (success) => {
              if (success) {
                console.log('Reporte actualizado con éxito');
                this.cargarReportes();
              } else {
                console.error('No se pudo actualizar el reporte');
              }
            },
            error: (err) => console.error('Error al actualizar:', err)
          });
        } else {
          // Creación (usando idEntidad = 2 por defecto)
          this.reporteService.agregar(result, 2).subscribe({
            next: (success) => {
              if (success) {
                console.log('Reporte creado con éxito');
                this.cargarReportes();
              } else {
                console.error('No se pudo agregar el reporte');
              }
            },
            error: (err) => console.error('Error al agregar:', err)
          });
        }
      }
    }, (reason) => {
      console.log('Modal cerrado:', reason);
    });
  }

  eliminarReporte(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este reporte?')) {
      this.reporteService.eliminar_por_id(id).subscribe({
        next: (success) => {
          if (success) {
            console.log('Reporte eliminado con éxito');
            this.cargarReportes();
          } else {
            console.error('No se pudo eliminar el reporte');
          }
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }

}
