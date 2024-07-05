import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnInit {
  text1 :string = ''
  constructor(private sharedService : SharedService) { }

  onChange(){
     this.sharedService.setInputData(this.text1);
  }
  ngOnInit(): void {
  }

}
