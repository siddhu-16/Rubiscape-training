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


  setId() {
    this.data.setId(this.id)
  }
  setbtn(event : any ){
    this.data.setEndpoint(event.target.id)
    this.btn = event.target.id
    this.data.getData().subscribe((apiInfo)=>{
      this.info = apiInfo
      console.log(this.info)
    })
  }

  constructor(private data : ApidataService) {

   }

  ngOnInit(): void {

  }

}
