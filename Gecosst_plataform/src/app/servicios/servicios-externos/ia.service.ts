import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IAService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:8080/ia";


  respuesta_ai(
    idarea:number,
    analisis: string,
    adicionales:string
  ): Observable<string> {

    const params = new HttpParams()
      .set("idarea", idarea)
      .set("analisis", analisis)
      .set("adicionales", adicionales);
    return this.http.get(this.URL + "/consultar_ia",{
    params,
    responseType:'text'
});
  }
}
