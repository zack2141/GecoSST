import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarraNavegaciónService {
  setTipoNav(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

    private tiponav = new BehaviorSubject<string>('ninguno');
    tiponav$ = this.tiponav.asObservable();

  setNav(tipo: string){
    this.tiponav.next(tipo);
  }
}
