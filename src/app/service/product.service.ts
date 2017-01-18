import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService{
    constructor(private http:Http){ }

    getAllProduct():Observable<any[]>{
        return this.http.get("http://localhost:8080/assets/mock-data/products.json")
                        .map((res:Response) => <any[]>res.json())
                        .do((data) => console.log(JSON.stringify(data)))
                        .catch(this.handleError)
    }

    handleError(err:Response):Observable<any>{
        console.log(err);
        return Observable.throw(err.json().err || "server error");
    }
    /*getAllProduct():any[]{
        return [
                {"id": 1, "name": "Coca Cola", "qty": 100, "price": 0.9},
                {"id": 2, "name": "Sprite", "qty": 200, "price": 0.6},
                {"id": 3, "name": "Fanta", "qty": 150, "price": 0.7},
                {"id": 4, "name": "Pepsi", "qty": 120, "price": 0.8}
            ];
    }*/

}