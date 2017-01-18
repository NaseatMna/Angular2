import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SignupRouting } from './signup.routing';
@NgModule({
            imports:[SignupRouting],
            declarations:[SignupComponent],
            exports:[],
          
})
export class SignupModule{

}