import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'viajero-home-page',
  templateUrl: './viajero-home-page.component.html',
  styleUrls: ['./viajero-home-page.component.css']
})
export class ViajeroHomePageComponent {
  constructor(private userService: UsersService, public router: Router) { }

  isLogged() {
    let res = this.userService.currentUser();
    return res ? true : false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
