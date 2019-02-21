import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Coche } from '../models/Coche';

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
  getCoche(idCoche:String){
    return this.httpClient.get<any>(this.url+'/coche/'+idCoche)
  }
  saveCoche(coche){
    const body = JSON.stringify(coche)

    const headers = new HttpHeaders({'Content-type':'application/json'})
    // URL = datos que van en el body = parametros y cabecera =headers
    return this.httpClient.post(this.url + '/coche/',body,{headers:headers})
  }
  updateCoche(idCoche,coche:Coche){
    const body = JSON.stringify(coche)
    const headers = new HttpHeaders({'Content-type':'application/json'})
    return this.httpClient.put(this.url +'/coche/'+idCoche,body,{headers:headers})
  }
  deleteCoche(idCoche:String){
    return this.httpClient.delete(this.url +'/coche/'+idCoche)
  }
}
