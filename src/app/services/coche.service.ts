import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  url:string = 'http://localhost:7777'
  constructor(private httpClient:HttpClient) { }

  getCoches(){
    //  tambien se puede hacer asi y entonces quitas el any de la otra parte
    //  this.httpClient.get<any>(this.url + '/coches')
    return this.httpClient.get(this.url + '/coches')

  }
  getCoche(idCoche:string){
    return this.httpClient.get<any>(this.url+'/coche/'+idCoche)
  }
  saveCoche(coche){

  }
  updateCoche(idCoche,coche){

  }
  deleteCoche(idCoche){

  }
}
