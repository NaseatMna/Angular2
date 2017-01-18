import { NgModule } from '@angular/core';
import { DashboadComponent } from './dashboad.component';
import { DashboadRouting } from './dashboad.routing';
import { ShareModule } from '../shared/share.module';

@NgModule({
    imports:[DashboadRouting,ShareModule],
    declarations:[DashboadComponent],
    exports:[]
})
export class DashboadModule{

}
