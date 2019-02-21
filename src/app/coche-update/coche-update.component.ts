import { Component, OnInit } from '@angular/core';
import { Coche } from '../models/Coche';
import { ActivatedRoute } from '@angular/router';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coche-update',
  // aqui le cambias el template reutilizando la de coche-add porque es igual mas o menos
  templateUrl: '../coche-add/coche-add.component.html',
  styleUrls: ['./coche-update.component.css']
})
export class CocheUpdateComponent implements OnInit {

  public coche:Coche;
  // injectas los servicios que necesites
  constructor(private cochesService: CocheService,
    private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    let elId= this.activateRoute.snapshot.params['id']
    this.cochesService.getCoche(elId).subscribe(
      result=>{this.coche = result['data']},
      error=>{console.error('Fallo al cargar coche')}
    )
  }
  onSubmit(){
    
  }

}
