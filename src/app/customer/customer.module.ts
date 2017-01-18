import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerRouting } from './customer.routing';
import { ShareModule } from '../shared/share.module';
import { CustomerListComponent } from './customer-list.component';
@NgModule({
            imports:[CustomerRouting,ShareModule,BrowserModule],
            declarations:[CustomerComponent,CustomerListComponent],
            exports:[],

})
export class CustomerModule{

}