import { NgModule } from '@angular/core';
import { TreeModule } from 'angular2-tree-component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { ProductRouting } from './product.routing';
import { ShareModule } from '../shared/share.module';

@NgModule({
    imports:[ProductRouting,BrowserModule,ShareModule,TreeModule],
    declarations:[ProductComponent],
    exports:[],
    
})
export class ProductsModule{
}