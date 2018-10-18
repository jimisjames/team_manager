import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
    ){}

  name: any
  position: any
  billy = false
  flash = null
  ngOnInit() {
  }

  add(){
    let observable = this._httpService.add({name: this.name, position: this.position})
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this._router.navigate(['roster/list']);
      } else {
        this.flash = "Name must be at least 3 characters "
      }
    })
  }

  show(){
    this.billy = true
  }
}
