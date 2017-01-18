import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboadComponent } from './dashboad.component';
const routes:Routes=[
        { path:'dashboad',component:DashboadComponent}
]

@NgModule({
            imports:[RouterModule.forChild(routes)],
            exports:[RouterModule],
})
export class DashboadRouting{

}