import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  
  baseurl = 'https://jsonplaceholder.typicode.com';

  endpoint = '';
  id = '';

  constructor(private http : HttpClient) { }


  setId(id :any){
    
    this.id = id;
    console.log(this.id)
  }
  
  setEndpoint(endpoint:any){
    this.endpoint = endpoint;
    console.log(this.endpoint)
  }
  getData() {
    return this.http.get<any>(`${this.baseurl}/${this.endpoint}/${this.id}`)
  }
}
