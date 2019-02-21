import { Component, OnInit } from '@angular/core';
import { CocheService } from '../services/coche.service';
import { Coche } from '../models/Coche';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.css']
})
export class CochesListComponent implements OnInit {
  public coches:Coche[];
  // se injecta para poder usar los servicios
  constructor(private cocheService:CocheService,
    private route:Router) { }

getCoches(){
  this.cocheService.getCoches().subscribe(
    // Dos maneras de hacerlo
    //(result:any) =>{this.coches=result.data},
    result =>{this.coches=result['data']},
    error => {console.log( error)}
  )
}

  ngOnInit() {
    this.getCoches()
  }
  borrarCoche(id:string){
        this.cocheService.deleteCoche(id).subscribe(
          result=>{
            console.log('Borrado ok')
            this.route.navigate(['/']) // / te lleva a la pagina principal
            this.getCoches()
          },
          error=>{console.error('Algo fue mal al borrar')}
        )
  }

}
