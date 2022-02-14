import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  

  constructor( private http: HttpClient ) { }


  getNewsByCategory( category ){
    return this.http.get(`http://despertardelamontana.com/c-${ category }?format=feed`);
  }

}
