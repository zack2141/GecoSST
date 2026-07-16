package com.example.gecosst.service.Query;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gecosst.RepositoryJPA.reportesJPA;
import com.example.gecosst.entidades.reporteCondiciones;

@Service
public class queryReporteCondiciones {
	

	@Autowired
	private reportesJPA repRep;
	
	
	public List<reporteCondiciones> lista_reportes(){
		
		return this.repRep.findAll();
		
	}
	
	public reporteCondiciones obtener_reporte(Long id) {
		
		return this.repRep.findById(id).get();
		
	}

}
