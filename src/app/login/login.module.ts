import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
@NgModule({
    imports:[LoginRouting],
    declarations:[LoginComponent],
    exports:[LoginComponent]
})
export class LoginModule{

}