import { Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css'],

})
export class TextDisplayComponent implements OnChanges { 

  text1 :string = ''
  text2 : string =''
  info : any;
  values : any;
  currentStyles: { [key: string]: string } = {};
  currentFontSize: number = 16;
  uppercase: any;
  isBold = false
  isItalic = false
  isUnderline = false
  isObject = false
  
  constructor(private sharedService : SharedService ) { }


  @Input() item = '';

  ngOnChanges(changes: SimpleChanges) {

    if (changes['item']) {

      let btnValue = ''

      if(!changes['item'].isFirstChange()){

        let fieldValues = JSON.parse(JSON.stringify(this.item))
        let keys = Object.keys(fieldValues)
        this.values = keys.map(k =>fieldValues[k])
        btnValue = this.values[0]

      }
    

      this.updateId(btnValue);
      
     
    }
    

  }

  onChange(){

      this.text2 = this.text1;
      this.sharedService.setInputData(this.text1);
  }

  updateId(id:any){
    
    switch (id) {
      case 'clrbtn':
        this.text1 = '';

        this.onChange()
        break;
      case 'spaceRemove':
        this.text2 = this.text2.replace(/\s+/g, '');
        break;
      case 'reverse':
        this.text2 = this.text2.split('').reverse().join('');
        break;
      case 'removeSpclChar':
        this.text2 = this.text2.replace(/[^a-zA-Z0-9 ]/g, '');
        break;
      case 'removeStyle':
        this.currentStyles = {};

        break;
      case 'capital':
        this.text2 = this.text2.toUpperCase();
        break;
      case 'bold-item':
        this.text2 = this.text2;
        this.currentStyles['font-weight'] = this.isBold?'normal' : 'bold' ;
        this.isBold = ! this.isBold
        
      break;
      case 'italic-item':
        this.text2 = this.text2;
        this.currentStyles['font-style'] = this.isItalic?'normal' : 'italic';
        this.isItalic = ! this.isItalic
      break;
      case 'underline-item': 
      this.text2 = this.text2;
        this.currentStyles['text-decoration'] =this.isUnderline?'none' : 'underline';
        this.isUnderline = ! this.isUnderline
      break;
      case 'plus':
        this.text2 = this.text2;
        this.currentFontSize += 10;
        this.currentStyles['font-size'] = `${this.currentFontSize}px`;
      break;
      case 'minus':
        this.text2 = this.text2;
        this.currentFontSize -= 10;
        this.currentStyles['font-size'] = `${this.currentFontSize}px`;
        break;
      default:
        this.text2 = this.text2;
        this.currentStyles['color'] = `${this.item}`
        break;
    }
    
  }


  ngOnInit(): void {
    
  }

}
