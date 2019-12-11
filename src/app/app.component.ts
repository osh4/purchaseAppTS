import { Component, OnChanges, SimpleChanges } from '@angular/core';
     
class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    name:string="Tom";
   
}
