import { Component, OnInit } from '@angular/core';
import {ApidataService} from './services/apidata.service'
@Component({
  selector: 'app-apiscomponent',
  templateUrl: './apiscomponent.component.html',
  styleUrls: ['./apiscomponent.component.css']
})
export class ApiscomponentComponent implements OnInit {

  info : any ;
  constructor(private data : ApidataService) {
    this.data.getData().subscribe((apiInfo)=>{
      this.info = apiInfo
      console.log(this.info)
    })
   }

  ngOnInit(): void {
  }

}
