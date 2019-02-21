import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CochesListComponent } from './coches-list/coches-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CocheDetalleComponent } from './coche-detalle/coche-detalle.component';
import { CocheAddComponent } from './coche-add/coche-add.component';
import {FormsModule} from '@angular/forms';
import { CocheUpdateComponent } from './coche-update/coche-update.component'

@NgModule({
  declarations: [
    AppComponent,
    CochesListComponent,
    CocheDetalleComponent,
    CocheAddComponent,
    CocheUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
