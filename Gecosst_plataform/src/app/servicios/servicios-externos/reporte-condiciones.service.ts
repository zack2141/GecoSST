import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reporte } from '../../entidades/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteCondicionesService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:8080/reporte_Condiciones";

  agregar(
    reporte_condiciones:reporte,
    id:number
  ): Observable<boolean> {

    const params = new HttpParams()
      .set("id", id);
    return this.http.post<boolean>(`${this.URL}/agregar_reporte`, reporte_condiciones, { params: params });
  }

  lista_reporte_condiciones(
    
  ): Observable<any>{
    return this.http.get<any>(`${this.URL}/Lista_reportes`);
  }

  actualizar(
    reporte_condiciones:reporte
  ): Observable<boolean> {
    return this.http.put<boolean>(`${this.URL}/actualiar_reporte`, reporte_condiciones);
  }

  eliminar_por_id(
    id:number
  ): Observable<boolean> {
    const params = new HttpParams()
      .set("id", id);
    return this.http.delete<boolean>(`${this.URL}/eliminar_reporte`, { params: params });
  }

  buscar_por_id(
    id:number
  ): Observable<reporte> {

    const params = new HttpParams()
      .set("id", id);
    return this.http.get<reporte>(`${this.URL}/obtener_reporte`, { params: params });
  }

}
