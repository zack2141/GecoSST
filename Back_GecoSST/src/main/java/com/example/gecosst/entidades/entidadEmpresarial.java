package com.example.gecosst.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="entidadempresarial")
public class entidadEmpresarial {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="idempresa")
	private Long idEmpresa;
	
	@Column(name="nombre")
	private String nombre;
	
	

	public entidadEmpresarial() {
		super();
		// TODO Auto-generated constructor stub
	}

	public entidadEmpresarial( String Nombre) {
		super();
		nombre = Nombre;
	}

	public Long getIdEmpresa() {
		return idEmpresa;
	}

	public void setIdEmpresa(Long idEmpresa) {
		this.idEmpresa = idEmpresa;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String Nombre) {
		nombre = Nombre;
	} 
	
	

}
