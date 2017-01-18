import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { ProductRouting } from './product.routing';
import { ShareModule } from '../shared/share.module';

@NgModule({
    imports:[ProductRouting,BrowserModule,ShareModule],
    declarations:[ProductComponent],
    exports:[],
    
})
export class ProductModule{
}