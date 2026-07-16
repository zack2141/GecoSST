package com.example.gecosst.service.Query;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gecosst.RepositoryJPA.entidadesEmpresarialesJPA;
import com.example.gecosst.entidades.entidadEmpresarial;

@Service
public class queryEntidadEmpresarial {
	
	@Autowired
	private entidadesEmpresarialesJPA repEe;
	
	
	public List<entidadEmpresarial> lista_entidades()
	{
		
		return this.repEe.findAll(); 
		
	}
	
	public entidadEmpresarial obtener_entidad_empresarial(Long idEntidad) {
		
		return repEe.findById(idEntidad).get();
		
	}

}

