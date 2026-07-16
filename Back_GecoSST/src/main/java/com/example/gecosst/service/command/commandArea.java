package com.example.gecosst.service.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gecosst.RepositoryJPA.areaJPA;
import com.example.gecosst.RepositoryJPA.entidadesEmpresarialesJPA;
import com.example.gecosst.entidades.area;
import com.example.gecosst.entidades.entidadEmpresarial;
import com.example.gecosst.service.Query.queryEntidadEmpresarial;
 
@Service
public class commandArea {
	
	
	@Autowired
	private areaJPA repArea;
	
	@Autowired
	private entidadesEmpresarialesJPA repEe;
	
	@Autowired
	private queryEntidadEmpresarial QEe;
	
	
	public boolean almacenar_area (area nueva, Long idEntidad) {
		
		entidadEmpresarial encontrada =this.QEe.obtener_entidad_empresarial(idEntidad);
		
		if( this.verficar_campos(nueva) == false) {
			
			return false;
		}
		
		if (encontrada == (null) ) {
			
			return false;
			
		}
		
		nueva.setIdEntidadEmpresarial(encontrada);
		
		
		
		repArea.save(nueva);
		
		return true;
		
	}
	
	public boolean elminar_area( Long id) {
		
		this.repArea.deleteById(id);
		
		return true;
		
		
	}
	
	
	public boolean actualizar_area(area actualiza) {
		
		
		this.repArea.save(actualiza);
		
		return true;
		
		
	}
	
	
	
	//-------------------------------------------------------------------------------------------------------------------------------------------------
	
	public boolean verficar_campos(area nueva) {
		
		
		if(
				(nueva.getNombre().equals("") || nueva.getNombre() == null) ||
				(nueva.getCantidadPersonas() == null) ||
				(nueva.getHorarios().equals("") || nueva.getHorarios() == null) ||
				(nueva.getDescripcion().equals("") || nueva.getDescripcion() == null) ||
				(nueva.getElementos().equals("") || nueva.getElementos() == null) ) {
			
			
			return false;
			
		}else {
			
			return true;
			
		}
		
		
	}
	

	 

}
