import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const routes:Routes=[
    { path:'',redirectTo:'/dashboad',pathMatch:'full'},
    { path:'customer',loadChildren:'./customer/customer.module#Customer.Module'},
    { path:'login',loadChildren:'./login/login.module#LoginModule'},
    { path:'signup',loadChildren:'./signup/signup.module#SignupModule' },
    {path:'product',loadChildren:'./products/product.module#ProductModule'},
    {path:'about',loadChildren:'./about/about.module#About.Module'},
    {path:'products/:id',loadChildren:'./product/product.module#ProductsModule'}
    

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{

}