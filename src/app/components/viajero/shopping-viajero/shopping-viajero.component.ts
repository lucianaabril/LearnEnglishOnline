import { Component } from '@angular/core';
import { Shopping } from 'src/app/interfaces/interfaces-viajero/shopping';
import { ViajeroService } from 'src/app/services/viajero.service';

@Component({
  selector: 'app-shopping-viajero',
  templateUrl: './shopping-viajero.component.html',
  styleUrls: ['./shopping-viajero.component.css']
})
export class ShoppingViajeroComponent {

  shoppingDatos:Shopping|undefined;

  constructor(private viajeroService: ViajeroService ){}
  
   async ngOnInit(){
    try{
      this.shoppingDatos =await this.viajeroService.getDataShopping();
      //console.log(this.shoppingDatos);
    }
    catch(error){
      console.log(error);
    }
  }

}
