import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { reporte } from '../../entidades/reporte';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  constructor(public activeModal: NgbActiveModal) { }

  cerra_modal() {
    this.activeModal.dismiss('cerrado con x')
  }

  objeto_reporte: reporte = new reporte();

  guardar_reporte() {
    this.activeModal.close(this.objeto_reporte);
  }

}
