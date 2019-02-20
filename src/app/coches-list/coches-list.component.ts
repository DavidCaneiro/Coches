import { Component, OnInit } from '@angular/core';
import { CocheService } from '../services/coche.service';
import { Coche } from '../models/Coche';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.css']
})
export class CochesListComponent implements OnInit {
  public coches:Coche[];
  constructor(private cocheService:CocheService) { }

  ngOnInit() {
      this.cocheService.getCoches().subscribe(
        // Dos maneras de hacerlo
        //(result:any) =>{this.coches=result.data},
        result =>{this.coches=result['data']},
        error => {console.log('No se puede listar los datos' + error)}
      )

  }

}
