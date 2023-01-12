//Modulo
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AdopcionComponent } from './Components/adopcion/adopcion.component';
import { AnimalesComponent } from './Components/Administrador/animales/animales.component';
import { CustomizeComponent } from './Components/Administrador/customize/customize.component';
import { PerrosComponent } from './Components/Administrador/perros/perros.component';
import { GatosComponent } from './Components/Administrador/gatos/gatos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adopcion', component:  AdopcionComponent },
  { path: 'admi-general', component: CustomizeComponent,
    children: [
      { path: '', component: AnimalesComponent },
      { path: 'perros', component: PerrosComponent, data: { animation: 'Uno' } },
      { path: 'gatos', component: GatosComponent, data: { animation: 'Dos' } }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
