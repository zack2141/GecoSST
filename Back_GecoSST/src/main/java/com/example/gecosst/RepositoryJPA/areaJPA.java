package com.example.gecosst.RepositoryJPA;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.gecosst.entidades.area;

public interface areaJPA  extends JpaRepository<area,Long>{
	
	@Query(value="SELECT idarea, nombre FROM area;", nativeQuery=true)
	List<Object> listaAreas();

}
