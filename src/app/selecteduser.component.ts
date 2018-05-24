import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Router,ActivatedRoute }  from '@angular/router';
import { Location } from '@angular/common';
@Component ({
   selector: 'suser-app',
   /*template: `Inventory 
   <a class = "button" (click) = "onBack()">Back to Products</a>`*/
   templateUrl : './selecteduser.component.html'
})
export class AppSuser {
  //fieldArray = [];
  //private location : Location;
  /*  data : {};
    constructor(private _router: Router){} 
    
       onBack(): void { 
        //setTimeout(() => this._router.navigate(['/Product']),5000);  
        console.log(this.data);
       this._router.navigate(['/Product']); 
       } */
       //x:number = 100;
      /* public constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.fieldArray = params["fieldArray"];
           // this.lastname = params["lastname"];
        });
    }*/
    
       @Input()
       fieldArray = [];
       @Input()
       lastVal : number;
       @Output()
       update = new EventEmitter<any>();
       onEmit(){
        
          this.update.emit({lastVal:this.lastVal});
        }
       /* onBack(): void { 
          
         this.location.back();
         //window.history.back();
         
         } */
}