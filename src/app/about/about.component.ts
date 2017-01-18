import { Component } from '@angular/core';
declare var google: any;

@Component({
            selector:'app-root',
            templateUrl:'./about.component.html',
            styleUrls:['./app.component.css'],
})
export class AboutComponent{
  title: string = 'Your Location ';
  lat: number = 11.536835;
  lng: number = 104.886375;
  
}




