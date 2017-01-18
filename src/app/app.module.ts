import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AboutModule } from './about/about.module';
import { CustomerModule } from './customer/customer.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboadModule } from './dashboad/dashboad.module';
import { ProductModule } from './products/product.module';
import { ShareModule } from './shared/share.module';
import { ProductsModule } from './product/product.module';

@NgModule({
            imports:[
              BrowserModule,
              HttpModule,
              AboutModule,
              LoginModule,
              SignupModule,
              DashboadModule,
              CustomerModule,
              ProductModule,
              AppRouting,
              ShareModule,
              ProductsModule
              ],
            declarations:[AppComponent],
            exports:[],
          bootstrap:[AppComponent]
})
export class AppModule{

}