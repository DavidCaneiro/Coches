import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  constructor() { }

  getCoches(){
    return [
      {id:'1',nombre:'seat',modelo:'panda',precio:5000},
      {id:'2',nombre:'seat',modelo:'ibiza',precio:7000},
      {id:'3',nombre:'seat',modelo:'leon',precio:9000},
      {id:'4',nombre:'tesla',modelo:'model-s',precio:100000},
    ]

  }
  getCoche(idCoche){

  }
  saveCoche(coche){

  }
  updateCoche(idCoche,coche){

  }
  deleteCoche(idCoche){

  }
}
