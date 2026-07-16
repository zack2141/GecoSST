package com.example.gecosst.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.gecosst.entidades.entidadEmpresarial;
import com.example.gecosst.service.Query.queryEntidadEmpresarial;
import com.example.gecosst.service.command.CommandEntidadEmpresarial;

@RestController
@RequestMapping("/entidad_Empresarial/")
@CrossOrigin(origins = "http://localhost:4200/")
public class entidadEmpresarialController {
	
	private final CommandEntidadEmpresarial CEe;
	
	private final queryEntidadEmpresarial qEe;

	private entidadEmpresarialController(CommandEntidadEmpresarial cEe, queryEntidadEmpresarial qEe) {
		super();
		CEe = cEe;
		this.qEe = qEe;
	}
	
	@PostMapping("/agregar_Entidad")
	private String agregar_entidad (@RequestParam String nombre) {
		
		return this.CEe.agregar_Nueva_Entidad(nombre);
		
	}
	
	@GetMapping("/lista_entidades")
	private List<entidadEmpresarial> lista_entidades_empresariales(){
		return this.qEe.lista_entidades();
	}

}
