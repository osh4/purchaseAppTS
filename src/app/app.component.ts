import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent} from './child.component';

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
   @ViewChild("nameText", {static: false})
    nameParagraph: ElementRef;
     
    name: string = "Tom";
     
    change() { 
        console.log(this.nameParagraph.nativeElement.textContent); 
        this.nameParagraph.nativeElement.textContent = "hell";
    }
}
