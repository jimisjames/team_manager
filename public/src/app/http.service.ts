import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}

  getPlayers(){
    return this._http.get("/players")
  }

  add(data){
    return this._http.post("/", data)
  }

  delete(id){
    return this._http.delete("/" + id)
  }

  update(data){
    return this._http.put("/", data)
  }
}
