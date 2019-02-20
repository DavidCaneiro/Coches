import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CocheDetalleComponent } from './coche-detalle/coche-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesListComponent,
    CocheDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
