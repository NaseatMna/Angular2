import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CustomerService{
    constructor(private http:Http){}
    getAllCustomer():Observable<any[]>{
        return this.http.get("http://localhost:8080/assets/mock-data/customer.json")
        .retry(2)
        .map((rest:Response)=><any[]>rest.json())
        .do((data)=>console.log(JSON.stringify(data)))
         .catch(this.handleError)
    }

    handleError(err:Response):Observable<any>{
        console.log(err)
        return Observable.throw(err.json().err||"server error")

    }

}