import { Component, OnInit } from '@angular/core';
import { Coche } from '../models/Coche';
import { CocheService } from '../services/coche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coche-add',
  templateUrl: './coche-add.component.html',
  styleUrls: ['./coche-add.component.css']
})
export class CocheAddComponent implements OnInit {

  public coche:Coche;
  // Para usar el servicio hay que injectarlo
  // router para moverme por sitios 
  constructor(private cocheService:CocheService,
    private router:Router) { }

  ngOnInit() {
 this.coche = new Coche('','','',0);
  }
  onSubmit(){
    this.cocheService.saveCoche(this.coche).subscribe(
      result =>{
        console.log('Guardado ok')
        this.coche = result['data']
        this.router.navigate(['/coche',this.coche._id])

      },
      error =>{
        console.log('Fallo al intentar guardar el coche')
      }
    )
  }

}
