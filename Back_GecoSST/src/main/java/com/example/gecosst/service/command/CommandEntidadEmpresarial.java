package com.example.gecosst.service.command;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gecosst.RepositoryJPA.entidadesEmpresarialesJPA;
import com.example.gecosst.entidades.entidadEmpresarial;


@Service
public class CommandEntidadEmpresarial {
	
	@Autowired
	private entidadesEmpresarialesJPA repEe;
	
	
	public String agregar_Nueva_Entidad(String nombre)
	{
		
		if(nombre.equals("") || nombre.isEmpty() || nombre == null) {
			
			return "se debe de agregar el nombre de la entidad";
			
		}
		
		entidadEmpresarial nueva = new entidadEmpresarial(nombre);
		
		this.repEe.save(nueva);
		
		return "entidad almacenada"; 
		
	}

	
}