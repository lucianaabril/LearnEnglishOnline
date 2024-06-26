import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-restaurante-home-page',
  templateUrl: './restaurante-home.component.html',
  styleUrls: ['./restaurante-home.component.css']
})
export class RestauranteHomePageComponent {
  constructor(private userService:UsersService, public router:Router){

  }
  isLogged(){
    let res = this.userService.currentUser();
    return res? true:false;
  }
}
