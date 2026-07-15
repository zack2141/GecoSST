import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { area } from '../../entidades/area';

@Injectable({
  providedIn: 'root'
})
export class AreaServiceService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:8080/area";



  buscar_por_id(
    id: number
  ): Observable<area> {

    const params = new HttpParams()
      .set("id", id);
    return this.http.get<area>(`${this.URL}/buscar_area_id`, { params: params });
  }

  agregar(
    area: area,
    idEntidad: number
  ): Observable<boolean> {
    const params = new HttpParams()
      .set("idEntidad", idEntidad);
    return this.http.post<boolean>(`${this.URL}/guardarArea`, area, { params: params });
  }

  modificar(
    area: area
  ): Observable<boolean> {
    return this.http.put<boolean>(`${this.URL}/actualizar_area`, area);
  }

  eliminar_por_id(
    id: number
  ): Observable<boolean> {

    const params = new HttpParams()
      .set("id", id);
    return this.http.delete<boolean>(`${this.URL}/eliminar_area`, { params: params });
  }


  lista_area(

  ): Observable<any>{

    return this.http.get<any>(`${this.URL}/lista_areas`);

  }
}
