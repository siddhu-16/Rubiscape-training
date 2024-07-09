import { Component, OnInit } from '@angular/core';
import {ApidataService} from './services/apidata.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apiscomponent',
  templateUrl: './apiscomponent.component.html',
  styleUrls: ['./apiscomponent.component.css']
})
export class ApiscomponentComponent implements OnInit {

  id : any; //
  btn:any;
  info : any ;
  error : string = ''
  method = '';
  body = '' //


  
  setMethod(event: any) {

    this.method = event.target.id;
    console.log(this.method);
    if(this.method ==='delete'){
      this.onDeleteData();
      return;
    }
    if(this.method === 'create'){
      
      this.onCreateData();
      return;
    }
    if(this.method === 'update'){
      
      this.onUpdateData();
      return;
    }
    
  }
  onDeleteData() {
    
    this.data.deleteData().subscribe()
    this.error = "Data Deleted..!"
  }
  onCreateData(){
    
    this.data.postData().subscribe()
    this.error = "Data Created..!"
  }
  onUpdateData(){
    
    this.data.updateData().subscribe()
    this.error = "Data Updated..!"
  }
  
  setBody(){
    this.data.setBody(this.body)
  }

  constructor(private data : ApidataService ,private http : HttpClient) {

  }


  setId() {
    this.data.setId(this.id)
  }

  setbtn(event : any ){

    if(!this.id){
      this.error = 'Please enter the id';
      return;
    }

    this.data.setEndpoint(event.target.id)

    this.btn = event.target.id

    this.data.getData().subscribe((apiInfo)=>{

      this.info = apiInfo
      
      this.error = '';

    },error =>{
      this.error = error.message
      console.log("invalid id")
      this.info = {}
    })

  }



  ngOnInit(): void {

  }

}
