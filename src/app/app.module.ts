//Modulos
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './Shared/Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Shared/Inicio/menu/menu.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { SliderComponent } from './Shared/Inicio/slider/slider.component';
import { FooterComponent } from './Shared/Inicio/footer/footer.component';
import { AdopcionComponent } from './Components/adopcion/adopcion.component';
import { DestacadoComponent } from './Shared/Inicio/destacado/destacado.component';
import { CumpleaniosComponent } from './Shared/Inicio/cumpleanios/cumpleanios.component';
import { AdoptaInicioComponent } from './Shared/Inicio/adopta-inicio/adopta-inicio.component';
import { CustomizeComponent } from './Components/Administrador/customize/customize.component';
import { DonacionInicioComponent } from './Shared/Inicio/donacion-inicio/donacion-inicio.component';
import { BusquedaInicioComponent } from './Shared/Inicio/busqueda-inicio/busqueda-inicio.component';
import { DenunciaInicioComponent } from './Shared/Inicio/denuncia-inicio/denuncia-inicio.component';
import { OrganizacionInicioComponent } from './Shared/Inicio/organizacion-inicio/organizacion-inicio.component';
import { AnimalesComponent } from './Components/Administrador/animales/animales.component';
import { PerrosComponent } from './Components/Administrador/perros/perros.component';
import { GatosComponent } from './Components/Administrador/gatos/gatos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    SliderComponent,
    CumpleaniosComponent,
    DestacadoComponent,
    AdoptaInicioComponent,
    DonacionInicioComponent,
    BusquedaInicioComponent,
    DenunciaInicioComponent,
    OrganizacionInicioComponent,
    FooterComponent,
    AdopcionComponent,
    LoginComponent,
    CustomizeComponent,
    AnimalesComponent,
    PerrosComponent,
    GatosComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
