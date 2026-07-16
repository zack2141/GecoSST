package com.example.gecosst.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="usuario")
public class usuario {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="idusuario")
	private Long idUsuario;
	
	@Column(name="nombre")
	private String nombre;
	
	@Column(name="apellido")
	private String apellido;
	
	@Column(name="cargo")
	private String cargo;
	

	@ManyToOne()
	@JoinColumn(name = "id_entidad_empresarial", referencedColumnName = "idempresa")
	private entidadEmpresarial idEntidadEmpresarial;


	public usuario( String nombre, String apellido, String cargo,
			entidadEmpresarial idEntidadEmpresarial) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.cargo = cargo;
		this.idEntidadEmpresarial = idEntidadEmpresarial;
	}


	public Long getIdUsuario() {
		return idUsuario;
	}


	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getCargo() {
		return cargo;
	}


	public void setCargo(String cargo) {
		this.cargo = cargo;
	}


	public entidadEmpresarial getIdEntidadEmpresarial() {
		return idEntidadEmpresarial;
	}


	public void setIdEntidadEmpresarial(entidadEmpresarial idEntidadEmpresarial) {
		this.idEntidadEmpresarial = idEntidadEmpresarial;
	}
	
	
	

}
