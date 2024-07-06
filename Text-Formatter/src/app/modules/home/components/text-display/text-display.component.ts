import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Input } from '@angular/core';
import { RemoveSpecialCharPipe } from 'src/app/Pipes/remove-special-char.pipe';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css'],

})
export class TextDisplayComponent implements OnChanges { 

  text1 :string = ''
  text2 : string =''
  currentStyles: { [key: string]: string } = {};
  currentFontSize: number = 16;
  uppercase: any;
  // constructor(private sharedService : SharedService, public pipe :RemoveSpecialCharPipe) { }
  constructor(private sharedService : SharedService ) { }


  @Input() item = '';

  ngOnChanges(changes: SimpleChanges) {

    if (changes['item']) {
      this.updateId(changes['item'].currentValue);
      console.log("id changes")
    }

  }



  updateId(id:any){
    
    switch (id) {
      case 'clrbtn':
        this.text2 = ''
        break;
      case 'spaceRemove':
        this.text2 = this.text1.replace(/\s+/g, '');
        break;
      case 'reverse':
        this.text2 = this.text1.split('').reverse().join('');
        break;
      case 'removeSpclChar':
        // this.text2 = this.pipe.transform(this.text1);
        this.text2 = this.text1.replace(/[^a-zA-Z0-9 ]/g, '');
        break;
      case 'removeStyle':
        break;
      case 'capital':
        this.text2 = this.text1.toUpperCase();
        break;
      case 'bold-item':
        this.currentStyles['font-weight'] = 'bold';
      break;
      case 'italic-item':
        this.currentStyles['font-style'] = 'italic'; 
      break;
      case 'underline-item':
        this.currentStyles['text-decoration'] = 'underline';
      break;
      case 'plus':
        this.currentFontSize += 10;
        this.currentStyles['font-size'] = `${this.currentFontSize}px`;
      break;
      case 'minus':
        this.currentFontSize -= 10;
        this.currentStyles['font-size'] = `${this.currentFontSize}px`;
        break;
      default:
        this.text2 = this.text1
        break;
    }
  }

  


  onChange(){

     this.sharedService.setInputData(this.text1);

  }

  ngOnInit(): void {
    
  }

}
