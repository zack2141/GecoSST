package com.example.gecosst.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.gecosst.RepositoryJPA.reportesJPA;
import com.example.gecosst.entidades.reporteCondiciones;
import com.example.gecosst.service.Query.queryReporteCondiciones;
import com.example.gecosst.service.command.commandReporteCondiciones;

@RestController
@RequestMapping("/reporte_Condiciones/")
@CrossOrigin(origins = "http://localhost:4200/")
public class reporteCondicionesController {
	
	private final commandReporteCondiciones Crc;
	
	private final queryReporteCondiciones Qrc;

	public reporteCondicionesController(commandReporteCondiciones crc, queryReporteCondiciones qrc) {
		super();
		Crc = crc;
		Qrc = qrc;
	}
	
	@PostMapping("/agregar_reporte")
	private boolean agregar_entidad (@RequestBody reporteCondiciones nuevo,@RequestParam Long id) {
		
		return this.Crc.agregar_reporte(nuevo, id);
		
	}
	
	@DeleteMapping("/eliminar_reporte")
	private boolean eliminar_entidad (@RequestParam Long id) {
		
		return this.Crc.eliminar_reporte(id);
		
	}
	
	@PutMapping("/actualiar_reporte")
	private boolean actualizar_entidad (@RequestBody reporteCondiciones actualizar) {
		
		return this.Crc.actualizar_reporte(actualizar);
		
	}
	
	@GetMapping("/Lista_reportes")
	private List<reporteCondiciones> lista_reportes(){
		
		return this.Qrc.lista_reportes();
		
		
	}
	
	@GetMapping("/obtener_reporte")
	private reporteCondiciones obtener_reporte(@RequestParam Long id){
		
		return this.Qrc.obtener_reporte(id);
		
		
	}

}
