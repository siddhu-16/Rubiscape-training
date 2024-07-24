import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  
  baseurl = 'https://jsonplaceholder.typicode.com';

  endpoint = '';
  id = '';
  body = ''
  
  constructor(private http : HttpClient) { }

  input_body = {}

  setId(id :any){
    this.id = id;
    
  }
  setBody(body : any){
    this.body = body;
  }
  
  setEndpoint(endpoint:any){
    this.endpoint = endpoint;
    
  }

  getData() {
    return this.http.get<any>(`${this.baseurl}/${this.endpoint}/${this.id}`)
  }

  deleteData(){
    return this.http.delete<any>(`${this.baseurl}/comments/${this.id}`)
  }
  
  updateData(){
    this.input_body = {
      
      'body' : this.body 
    }
    return this.http.put<any>(`${this.baseurl}/comments/${this.id}`,this.input_body)
  }

  postData(){
    this.input_body = {
      'id' : this.id,
      'body' : this.body 
    }
   
    return this.http.post<any>(`${this.baseurl}/comments/`,this.input_body)
  }
}
