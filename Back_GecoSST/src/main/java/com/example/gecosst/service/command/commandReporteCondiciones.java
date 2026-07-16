package com.example.gecosst.service.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gecosst.RepositoryJPA.entidadesEmpresarialesJPA;
import com.example.gecosst.RepositoryJPA.reportesJPA;
import com.example.gecosst.entidades.entidadEmpresarial;
import com.example.gecosst.entidades.reporteCondiciones;
import com.example.gecosst.service.Query.queryEntidadEmpresarial;

@Service
public class commandReporteCondiciones {
	
	@Autowired
	private reportesJPA repRep;
	
	@Autowired
	private entidadesEmpresarialesJPA repEe;
	
	@Autowired
	private queryEntidadEmpresarial QEe;
	
	public boolean agregar_reporte(reporteCondiciones nuevo, Long idEntidad) {
		
		entidadEmpresarial encontrada =this.QEe.obtener_entidad_empresarial(idEntidad);
		
		nuevo.setIdEntidadEmpresarial(encontrada);
		
		this.repRep.save(nuevo);
		
		return true;
		
		
	}
	
	public boolean actualizar_reporte(reporteCondiciones nuevo) {
		
		this.repRep.save(nuevo);
		
		return true;
		
		
	}
	
    public boolean eliminar_reporte(Long id) {
		
		this.repRep.deleteById(id);
		
		return true;
		
		
	}

}
