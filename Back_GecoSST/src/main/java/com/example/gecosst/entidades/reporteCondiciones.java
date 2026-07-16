package com.example.gecosst.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="reporte")
public class reporteCondiciones {
	
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="idreporte")
	private Long idReporte;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Column(name="estado")
	private String estado;
	
	@Lob
	@Column(name="descripcionmedidascontrol")
	private String descripcionMedidasControl;
	
	@Lob
	@Column(name="descripcionaccionescorrectivas")
	private String descripcionAccionesCorrectiva;
	
	@Column(name="tiporeporte")
	private String tipoReporte;
	
	
	@ManyToOne()
	@JoinColumn(name = "id_entidad_empresarial", referencedColumnName = "idempresa")
	private entidadEmpresarial idEntidadEmpresarial;

	public reporteCondiciones() {
		super();
		// TODO Auto-generated constructor stub
	}

	public reporteCondiciones(String descripcion, String estado, String descripcionMedidasControl,
			String descripcionAccionesCorrectiva, String tipoReporte,
			entidadEmpresarial idEntidadEmpresarial) {
		super();
		this.descripcion = descripcion;
		this.estado = estado;
		this.descripcionMedidasControl = descripcionMedidasControl;
		this.descripcionAccionesCorrectiva = descripcionAccionesCorrectiva;
		this.tipoReporte = tipoReporte;
		this.idEntidadEmpresarial = idEntidadEmpresarial;
	}

	public Long getIdReporte() {
		return idReporte;
	}

	public void setIdReporte(Long idReporte) {
		this.idReporte = idReporte;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getDescripcionMedidasControl() {
		return descripcionMedidasControl;
	}

	public void setDescripcionMedidasControl(String descripcionMedidasControl) {
		this.descripcionMedidasControl = descripcionMedidasControl;
	}

	public String getDescripcionAccionesCorrectiva() {
		return descripcionAccionesCorrectiva;
	}

	public void setDescripcionAccionesCorrectiva(String descripcionAccionesCorrectiva) {
		this.descripcionAccionesCorrectiva = descripcionAccionesCorrectiva;
	}

	public String getTipoReporte() {
		return tipoReporte;
	}

	public void setTipoReporte(String tipoReporte) {
		this.tipoReporte = tipoReporte;
	}


	public entidadEmpresarial getIdEntidadEmpresarial() {
		return idEntidadEmpresarial;
	}

	public void setIdEntidadEmpresarial(entidadEmpresarial idEntidadEmpresarial) {
		this.idEntidadEmpresarial = idEntidadEmpresarial;
	}
	

}
