import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Input } from '@angular/core';
import { RemoveSpecialCharPipe } from 'src/app/Pipes/remove-special-char.pipe';
@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent implements OnChanges {
  
  text1 :string = ''
  text2 : string =''

  constructor(private sharedService : SharedService, private removeSpecialCharPipe : RemoveSpecialCharPipe) { }

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
        
        break;
      case 'spaceRemove':
        this.text2 = this.text1.replace(/\s+/g, '');
        break;
      case 'reverse':
        this.text2 = this.text1.split('').reverse().join('');
        break;
      case 'removeSpclChar':
        this.text2 = this.removeSpecialCharPipe.transform(this.text1);
        break;
      case 'removeStyle':

        break;
      case 'capital':
        this.text2 = this.text1.charAt(0).toUpperCase() + this.text1.slice(1);
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
