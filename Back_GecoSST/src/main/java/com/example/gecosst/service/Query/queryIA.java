package com.example.gecosst.service.Query;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.gecosst.RepositoryJPA.areaJPA;
import com.example.gecosst.entidades.area;
import com.example.gecosst.entidades.DTO.IARequest;
import com.example.gecosst.entidades.DTO.IAResponse;

@Service
public class queryIA {

	 @Autowired
	    private RestTemplate restTemplate;
	 
	 @Autowired
	 private areaJPA repArea;

	    private final String URL = "http://localhost:11434/api/generate";

	    public String preguntar( Long idarea, String analisis, String adicionales){
	    	
	    	area encontrada = repArea.findById(idarea).get();
	    	
	    	String mensaje=" Eres un experto en el area de seguridad en seguridad y salud en el trabajo, eres el encargado de "
	    			+ " manejar el sistema de seguridad y salud en el trebajo para instituciones educativas y universidades, en basea la data proporcionada, realizaras"
	    			+ " analisis, recomendaciones, estrategias planes preventivos y correctivos, esto según lo solicitado en el promt."
	    			+ "analisaras el area de:"
	    			+ encontrada.getNombre() +", con una recurrecia de "
	    			+ encontrada.getCantidadPersonas() +" de personas, en los horarios de "
	    			+ encontrada.getHorarios() +", el espacio es frecuentado por "
	    			+ encontrada.getTiposPersonal() +", este espacio se describe como "
	    			+ encontrada.getDescripcion() +", y contiene los siguientes elemento y aspectos "
	    			+ encontrada.getElementos()
	    			+ "adicional a ello se requeire que se realice un analis sobre "+ analisis +"con las siguientes instrucciones adiconales " + adicionales
	    			+ " (a tener en cuenta: si no hay un analisis por realizar pero hay instrcciones adicionales, prosigue con la resolucion de las instrucciones, "
	    			+ " si solo hay ananlisis y no instrucciones, limitate a realizar solo el analisis, si hay ausencia de ambos o no estan claros de manera explicita,"
	    			+ " realiza un analisis general del entorno, indica los posibles riesgos fisicos, ambientales, quimicos, electricos, igneos, psicologicos y entre demas que apliquen al escenario a analizar"
	    			+" devuelve la respuesta en html, en notaciones de texto como titulos, subtitulos yu parrafos, entre demas, pues la respuesta sera insertada en un innerhtml ";

	        IARequest request = new IARequest(
	                "llama3.1:8b",
	                mensaje,
	                false
	        );

	        HttpHeaders headers = new HttpHeaders();
	        headers.setContentType(MediaType.APPLICATION_JSON);

	        HttpEntity<IARequest> entity =
	                new HttpEntity<>(request, headers);

	        ResponseEntity<IAResponse> response =
	                restTemplate.postForEntity(
	                        URL,
	                        entity,
	                        IAResponse.class
	                );

	        return response.getBody().getResponse();

	    }
}
