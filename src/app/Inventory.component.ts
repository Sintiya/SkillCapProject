import { Component } from '@angular/core';
import { Router }  from '@angular/router';
@Component ({
   selector: 'invent-app',
   /*template: `Inventory 
   <a class = "button" (click) = "onBack()">Back to Products</a>`*/
   templateUrl : './Inventory.component.html'
})
export class AppInventory  {
    data : {};
    constructor(private _router: Router){} 
    
       onBack(): void { 
        //setTimeout(() => this._router.navigate(['/Product']),5000);  
        console.log(this.data);
       this._router.navigate(['/Product']); 
       } 
}