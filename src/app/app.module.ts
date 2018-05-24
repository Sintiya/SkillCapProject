import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';
import { AppSam } from './sam.component';
import { AppRam } from './ram.component';
import { AppSuser } from './selecteduser.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
   { path: 'Sam', component: AppSam },
   { path: 'Ram', component: AppRam },
   {path: 'Suser', component: AppSuser}
];

@NgModule ({
   imports: [ BrowserModule,
    FormsModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,Appproduct,AppInventory,AppSam,AppRam,AppSuser],
   bootstrap: [ AppComponent ]
})
export class AppModule { }