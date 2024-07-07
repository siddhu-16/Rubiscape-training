import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private inputData: string = '';
  inputDataChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setInputData(data: string) {
    this.inputData = data;
    this.inputDataChanged.emit(this.inputData);
    
  }


}
