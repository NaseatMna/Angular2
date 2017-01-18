import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from '../shared/share.module';
import { AboutRouting } from './about.routing';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
            imports:[
                ShareModule,AboutRouting, BrowserModule,
                FormsModule,
                AgmCoreModule.forRoot({
                 apiKey: 'AIzaSyDtDWdGtTBF_fqsfgzMiTeSqqAsusjWH-Y'
                   })
                ],
            declarations:[AboutComponent],
            exports:[AboutComponent],
})
export class AboutModule{

}