import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CochesListComponent } from './coches-list/coches-list.component';
import { CocheDetalleComponent } from './coche-detalle/coche-detalle.component';

const routes: Routes = [
  // estas rutas son las que tienen que poner en el navegador
  {path:'',component:CochesListComponent},
  {path:'list',component:CochesListComponent},
  {path:'coche/:id',component:CocheDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
