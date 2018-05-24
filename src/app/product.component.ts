import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import * as $ from "jquery";
@Component ({
   selector: 'my-app',
   //template: 'Products',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.css']
})
export   class   Appproduct  {
  crName = "";
  crNumber = "";

  onClickDate(){
    console.log('onClickDate');
    $("#datetimepicker1").datetimepicker();
  }
  onBlurMethod(){
    console.log("onblur");
    if(this.crNumber=="150123"){
      this.crName = "Change request to add a new upstream system";
  }
  else if(this.crNumber=="150234"){
    this.crName = "Weblogic version upgrade";
  }
  else if(this.crNumber=="150345"){
    this.crName = "Security Vulnerability - Struts version upgrade";
  }
  else{
    this.crName = "Fix GUI open defects";
  }
  
  }
  isCollapsed;
  isChild=true;
  toShow=false;
   fieldArray = [];
   countVal;
   newAttribute: string ;
   i : string;
   j : number = 0;
   isDisabled1; isDisabled2 ; isDisabled3 ; isDisabled4 ; isDisabled5 ; isDisabled6 ; isDisabled7 ;
   isDisabled8 ; isDisabled9 ; isDisabled10 ; isDisabled11 ;isDisabled12 ;
   val  ;
   index: number;
   ele : any;
  /*addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }*/

/*deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
    this.isDisabled=false;
}
*/
  
  //  isUserClicked=true;

  public constructor(private router: Router) { }
  public onTap() {
    console.log("ontap");
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "fieldArray": this.fieldArray
        }
    };
    this.router.navigate(["/Suser"], navigationExtras);
}

  twoCondition(){
    if(this.isCollapsed==true && this.isChild == true)
return true;
else 
return false;
    }

  
    toUpdate(event : any){
      console.log(event);
      console.log("j");
      console.log(event.lastVal);
      this.j = event.lastVal;
    }
  onUpdateIA(){
    console.log('inside update ia');
    console.log(this.j);
    console.log(document.getElementById("ia_build").innerHTML=String(this.j));
  }
  e1Add(event:any) {
   // this.isDisabled=true;
   //console.log(document.getElementById("hello").innerHTML);
   //this.isCollapsed = true;
   let y=event.target.parentElement.parentElement.parentElement.querySelector('.mail');
   let x=y.innerHTML;
   // this.newAttribute = document.getElementById("sampath").innerHTML;
   this.newAttribute=x;
    this.fieldArray.push(this.newAttribute)
    let a = event.target.parentElement.parentElement.parentElement.querySelector('.comp').innerHTML;
    console.log(a);
    if(a=="Build"){
      console.log("start if");
      //this.isCollapsed = true;
     if(document.getElementById("ia_build").innerHTML!=null){
         this.i = document.getElementById("ia_build").innerHTML;
        console.log(this.i);
        this.j = Number(this.i)+1;
        console.log(this.j);
        document.getElementById("ia_build").innerHTML=String(this.j);
        console.log(document.getElementById("ia_build").innerHTML);
      }
     // console.log(i);
      //i=i+1;
      console.log("end if");
    }
    }
    e1Remove(event:any){
     // this.isDisabled=false;
      this.val = event.target.parentElement.parentElement.parentElement.querySelector('.mail').innerHTML;
       this.index =this.fieldArray.indexOf(this.val);
      this.fieldArray.splice(this.index,1);
      let a = event.target.parentElement.parentElement.parentElement.querySelector('.comp').innerHTML;
      console.log(a);
      if(a=="Build"){
        console.log("start if");
        //this.isCollapsed = true;
       if(document.getElementById("ia_build").innerHTML!=null){
        this.i = document.getElementById("ia_build").innerHTML;
          console.log(this.i);
          this.j = Number(this.i)-1;
          console.log(this.j);
          document.getElementById("ia_build").innerHTML=String(this.j);
          console.log(document.getElementById("ia_build").innerHTML);
        }
       // console.log(i);
        //i=i+1;
        console.log("end if");
      }
    }

                       
  

}