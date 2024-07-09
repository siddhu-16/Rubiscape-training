import { Component, OnInit } from '@angular/core';
import {ApidataService} from './services/apidata.service'

@Component({
  selector: 'app-apiscomponent',
  templateUrl: './apiscomponent.component.html',
  styleUrls: ['./apiscomponent.component.css']
})
export class ApiscomponentComponent implements OnInit {

  id : any;
  btn:any;
  info : any ;

  error : string = ''

  constructor(private data : ApidataService) {

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
      console.log(this.info)
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
