package com.example.gecosst.service.Query;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gecosst.RepositoryJPA.areaJPA;
import com.example.gecosst.entidades.area;

@Service
public class queryArea {
	
	@Autowired
	private areaJPA repArea;
	
	public area buscar_area_id( Long id) {
		
		return this.repArea.findById(id).get();
		
		
	}
	
	public List<Object> obtener_nombres_areas(){
		
		return repArea.listaAreas();
		
	}

}
