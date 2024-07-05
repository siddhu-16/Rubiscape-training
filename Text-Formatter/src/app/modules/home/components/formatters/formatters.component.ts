import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-formatters',
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent implements OnInit {
  text1 : string ='';
  wordCount = 0;
  charCount = 0;

  constructor(private sharedService :SharedService) { }

  ngOnInit(): void {
    this.sharedService.inputDataChanged.subscribe(data =>{
      this.text1 = data;
      this.charCount = data.length;
      this.wordCount = data.trim().split(" ").filter(word => word.length >0).length;
    })
  }

}
