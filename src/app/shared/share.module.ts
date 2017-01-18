import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuleftComponent } from './menu-left/menu-left.component';

@NgModule({
            imports:[],
            declarations:[FooterComponent,HeaderComponent,MenuleftComponent],
            exports:[FooterComponent,HeaderComponent,MenuleftComponent]

})
export class ShareModule{

}