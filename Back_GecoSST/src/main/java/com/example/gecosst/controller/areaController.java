package com.example.gecosst.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.gecosst.entidades.area;
import com.example.gecosst.service.Query.queryArea;
import com.example.gecosst.service.command.commandArea;

@RestController
@RequestMapping("/area/")
@CrossOrigin(origins = "http://localhost:4200/")
public class areaController {
	
	private final commandArea Carea;
	
	private final queryArea Qarea;
	
	
	
	public areaController(commandArea carea, queryArea qarea) {
		super();
		Carea = carea;
		Qarea = qarea;
	}
	
	

	@PostMapping("/guardarArea")
	public boolean guardar_area ( @RequestBody area nueva, @RequestParam Long idEntidad) {
		
		return Carea.almacenar_area(nueva, idEntidad);
		
		
		
	}
	
	@DeleteMapping("/eliminar_area")
	public boolean eliminar_area ( @RequestParam Long id) {
		
		
		return this.Carea.elminar_area(id);
		
	}
	
	@PutMapping("/actualizar_area")
	public boolean actualizar_area ( @RequestBody area actualizar) {
		
		
		return this.Carea.actualizar_area(actualizar);
		
	}
	
	@GetMapping("/buscar_area_id")
	public area buscar_area ( @RequestParam Long id) {
		
		
		return this.Qarea.buscar_area_id(id);
		
	}
	
	@GetMapping("/lista_areas")
	public List<Object> lista_de_areas (){
		
		return this.Qarea.obtener_nombres_areas();
		
	}

}
