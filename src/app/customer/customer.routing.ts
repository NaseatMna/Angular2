import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list.component';
const routes:Routes=[
   { 
       path:'customer',component:CustomerComponent,
    //     children:[
    //         { path:'detail',component:CustomerListComponent }
    // ] 
   }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CustomerRouting{

}