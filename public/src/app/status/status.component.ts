import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private _httpService: HttpService){}

  players: any
  game = "game_one"
  title = "One"

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers(){
    let observable = this._httpService.getPlayers()
    observable.subscribe(data => {
      //console.log(data)
      this.players = data["players"]
      for(let player of this.players){
        player.status = player[this.game]
      }
    })
  }

  change(x){
    if(x == "game_one"){
      for(let player of this.players){
        player.status = player.game_one
      }
      this.game = "game_one"
      this.title = "One"
    } else if(x == "game_two"){
      for(let player of this.players){
        player.status = player.game_two
      }
      this.game = "game_two"
      this.title = "Two"
    } else if(x == "game_three"){
      for(let player of this.players){
        player.status = player.game_three
      }
      this.game = "game_three"
      this.title = "Three"
    }
  }

  play(id){
    let observable = this._httpService.update({id: id, game: this.game, status: "playing"})
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this.getPlayers()
      }
    })
  }

  not(id){
    let observable = this._httpService.update({id: id, game: this.game, status: "not"})
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this.getPlayers()
      }
    })
  }

  un(id){
    let observable = this._httpService.update({id: id, game: this.game, status: "undecided"})
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this.getPlayers()
      }
    })
  }
}
