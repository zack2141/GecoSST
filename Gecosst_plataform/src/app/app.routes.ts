import { Routes } from '@angular/router';
import path from 'path';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { DashboardComponent } from './plataforma/dashboard/dashboard.component';
import { RegistroAreaComponent } from './plataforma/registro-area/registro-area.component';
import { AnalisisIAComponent } from './plataforma/analisis-ia/analisis-ia.component';
import { RegistroInAcCiComponent } from './plataforma/registro-in-ac-ci/registro-in-ac-ci.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },


    { path: 'inicio_sesion', component: InicioSesionComponent },

    //------------------------------------------------------------------------------
    // Componentes de la plataforma
    //------------------------------------------------------------------------------
    { path: 'plataforma/dashboard', component: DashboardComponent },
    { path: 'plataforma/registro-area', component: RegistroAreaComponent },
    { path: 'plataforma/analisis-ia', component: AnalisisIAComponent },
    { path: 'plataforma/reportes', component: RegistroInAcCiComponent }
];
