import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CochesListComponent } from './coches-list/coches-list.component';

const routes: Routes = [
  {path:'',component:CochesListComponent},
  {path:'list',component:CochesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
