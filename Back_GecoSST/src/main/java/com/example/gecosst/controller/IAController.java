package com.example.gecosst.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.gecosst.entidades.area;
import com.example.gecosst.service.Query.queryIA;

@RestController
@RequestMapping("/ia/")
@CrossOrigin(origins = "http://localhost:4200/")
public class IAController {
	
	
	private final queryIA QIA;
	
	
	
	public IAController(queryIA qIA) {
		super();
		QIA = qIA;
	}



	@GetMapping("/consultar_ia")
	public String guardar_area (@RequestParam Long idarea, @RequestParam String analisis, @RequestParam String adicionales) {
		
		return this.QIA.preguntar( idarea, analisis, adicionales);
		
		
		
	}
	
}
