import { Component, OnInit } from '@angular/core';
import { Coche } from '../models/Coche';
import { CocheService } from '../services/coche.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coche-detalle',
  templateUrl: './coche-detalle.component.html',
  styleUrls: ['./coche-detalle.component.css']
})
export class CocheDetalleComponent implements OnInit {

  public coche:Coche
  constructor(private cochesService: CocheService,
    private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    // se pone snapshot
    let elId= this.activateRoute.snapshot.params['id']
    console.log(elId)
    this.cochesService.getCoche(elId).subscribe(
      result => {this.coche = result.data},
      error =>{console.log('Fallo al leer el coche' + error)}
    )
  }

}
