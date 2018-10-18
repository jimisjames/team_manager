import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  players = []

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    let observable = this._httpService.getPlayers()
    observable.subscribe(data => {
      if(data["message"] == "Success"){
        this.players = data["players"]
      }
    })
  }

  delete(id){
    if(confirm("Are you sure you want to permanently delete this player?")){
      let observable = this._httpService.delete(id)
      observable.subscribe(data => {
        if(data["message"] == "Success"){
          this.getPlayers()
        }
      })
    }
  }
}
