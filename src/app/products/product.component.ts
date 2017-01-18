import { Component } from '@angular/core';
import { ProductService } from './../service/product.service';
@Component({
            selector:'',
            templateUrl:'./product.component.html',
            providers: [ProductService]
})
export class ProductComponent{
 private products:any[];

    constructor(private productService:ProductService){ 
        //this.products=this.productService.getAllProduct();
        this.productService.getAllProduct()
                           .subscribe(
                               (data) => this.products =data, //success
                               (err) => console.log(err), // error 
                               () => console.log("process completed.") // always run
                           )
    }
}