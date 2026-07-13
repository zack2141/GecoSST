import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { area } from '../../entidades/area';

@Injectable({
  providedIn: 'root'
})
export class AreaServiceService {

  constructor( private http: HttpClient) { }

  URL ="http://localhost:8080/area";



  buscar_por_id(
    id:number
  ):Observable<area>{

    const params= new HttpParams()
    .set("id", id);
    return this.http.post<area>(`${this.URL}/buscar_area_id`, {params: params});
  }

  agregar(
    area:area
  ):Observable<area>{
    return this.http.post<area>(`${this.URL}/guardar_area`,area);
  }

  modificar(
    area:area
  ):Observable<area>{
    return this.http.put<area>(`${this.URL}/actualizar_area`,area);
  }

  eliminar_por_id(
    id:number
  ):Observable<area>{

    const params= new HttpParams()
    .set("id", id);
    return this.http.post<area>(`${this.URL}/eliminar_area`, {params: params});
  }
}
