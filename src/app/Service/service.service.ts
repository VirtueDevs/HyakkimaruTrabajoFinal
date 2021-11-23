import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Batalla }    from '../Modelo/Batalla';
import { Object }    from '../Modelo/Object';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:3000/battles';
  Url2='http://localhost:3000/objects';

  getBatallas(){

    return this.http.get<Batalla[]>(this.Url);
  }

  getObjetos(){
    return this.http.get<Object[]>(this.Url2);
  }

}
