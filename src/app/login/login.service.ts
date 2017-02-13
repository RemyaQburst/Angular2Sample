import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {TableData} from './model/table-data';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
     // private instance variable to hold base url
     private tabeldataUrl = 'http://www.mocky.io/v2/58a18cb71000004b2a558710';
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     getData(): Observable<TableData[]> {

         // ...using get request
         return this.http.get(this.tabeldataUrl)
                        // ...and calling .json() on the response to return data
                         .map((res: Response) => res.json())
                         // ...errors if any
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

     }
}
