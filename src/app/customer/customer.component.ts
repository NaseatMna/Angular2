import { Component  } from '@angular/core';
import { ProductService } from './../service/product.service';
import { CustomerService } from './../service/customer.service';

@Component({
            selector:'',
            templateUrl:'./customer.component.html',
             providers: [ProductService,CustomerService]
})


export class CustomerComponent{

 private products:any[];
 private customers:any[];

    constructor(private productService:ProductService, private customerservice:CustomerService){ 
        //this.products=this.productService.getAllProduct();
        this.productService.getAllProduct()
                           .subscribe(
                               (data) => this.products =data, //success
                               (err) => console.log(err), // error 
                               () => console.log("process completed.") // always run
                           )
     this.customerservice.getAllCustomer()
                            .subscribe(
                                (data)=>this.customers=data,
                                (err)=>console.log(err),
                                ()=>console.log("Process Complete")
                            )
    }

}