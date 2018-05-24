import { Component } from '@angular/core';
import { Router }  from '@angular/router';
@Component ({
   selector: 'sam-app',
   /*template: `Inventory 
   <a class = "button" (click) = "onBack()">Back to Products</a>`*/
   templateUrl : './sam.component.html'
})
export class AppSam {
    constructor(private _router: Router){} 
    onBack(): void { 
        //setTimeout(() => this._router.navigate(['/Product']),5000);  
       // console.log(this.data);
       //this._router.navigate(['/Product']); 
       window.history.back();
       document.getElementById('findRes').click();
       } 
    
}