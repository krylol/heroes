import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './heroes/componentes/alta/alta.component';
import { BusquedaComponent } from './heroes/componentes/busqueda/busqueda.component';
import { DetalleComponent } from './heroes/componentes/detalle/detalle.component';
import { HomeComponent } from './heroes/componentes/home/home.component';
import { ListadoComponent } from './heroes/componentes/listado/listado.component';
import { ModalComponent } from './heroes/componentes/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    BusquedaComponent,
    DetalleComponent,
    HomeComponent,
    ListadoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
