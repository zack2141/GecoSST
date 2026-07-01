import { Routes } from '@angular/router';
import path from 'path';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [

    {path:'', redirectTo:'inicio', pathMatch: 'full'},
    {path:'inicio', component:InicioComponent},
];
