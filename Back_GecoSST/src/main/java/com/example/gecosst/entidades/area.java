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
@Table(name="area")

public class area {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="idarea")
	private Long idArea;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="cantidadpersonas")
	private Long cantidadPersonas;
	
	@Column(name="horarios")
	private String horarios;
	
	@Column(name="tipospersonal")
	private String tiposPersonal;
	
	@Column(name="descripcion")
	private String descripcion;
	
	@Lob
	@Column(name="elementos", nullable = false)
	private String elementos;
	
	@ManyToOne()
	@JoinColumn(name = "id_entidad_empresarial", referencedColumnName = "idempresa")
	private entidadEmpresarial idEntidadEmpresarial;

	
	
	public area() {
		super();
		// TODO Auto-generated constructor stub
	}

	public area( String nombre, Long cantidadPersonas, String horarios, String tiposPersonal,
			String descripcion, String elementos, entidadEmpresarial idEntidadEmpresarial) {
		super();
		this.nombre = nombre;
		this.cantidadPersonas = cantidadPersonas;
		this.horarios = horarios;
		this.tiposPersonal = tiposPersonal;
		this.descripcion = descripcion;
		this.elementos = elementos;
		this.idEntidadEmpresarial = idEntidadEmpresarial;
	}

	public Long getIdArea() {
		return idArea;
	}

	public void setIdArea(Long idArea) {
		this.idArea = idArea;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getCantidadPersonas() {
		return cantidadPersonas;
	}

	public void setCantidadPersonas(Long cantidadPersonas) {
		this.cantidadPersonas = cantidadPersonas;
	}

	public String getHorarios() {
		return horarios;
	}

	public void setHorarios(String horarios) {
		this.horarios = horarios;
	}

	public String getTiposPersonal() {
		return tiposPersonal;
	}

	public void setTiposPersonal(String tiposPersonal) {
		this.tiposPersonal = tiposPersonal;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getElementos() {
		return elementos;
	}

	public void setElementos(String elementos) {
		this.elementos = elementos;
	}

	public entidadEmpresarial getIdEntidadEmpresarial() {
		return idEntidadEmpresarial;
	}

	public void setIdEntidadEmpresarial(entidadEmpresarial idEntidadEmpresarial) {
		this.idEntidadEmpresarial = idEntidadEmpresarial;
	}

}
