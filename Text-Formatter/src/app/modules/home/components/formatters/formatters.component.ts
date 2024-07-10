import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css'],
  
})




export class FormattersComponent implements OnInit {

passData = {
  btn_value: '',
  btn_state : false
}
 

  text1 : string ='';
  wordCount = 0;
  charCount = 0;
  bClick = false
  btn : any;
  color : any ;


  constructor(private sharedService :SharedService) { }

  @Output() updateDataEvent = new EventEmitter<any>();
  

  ngOnInit(): void {

    this.sharedService.inputDataChange.subscribe(data =>{
      
      this.text1 = data;
      this.charCount = data.length;
      this.wordCount = data.trim().split(" ").filter(word => word.length >0).length;
      
    })

  }


  getId(event : any){
    

    if(event.target.id == 'colorPicker'){
      
      this.color = event.target.value;
      this.updateDataEvent.emit(this.color)
    }else {

      this.passData = {
        btn_value : event.target.id,
        btn_state : false
      }
      this.btn = event.target.id;
      
      this.updateDataEvent.emit(this.passData )
     
    }


    
  }
}
