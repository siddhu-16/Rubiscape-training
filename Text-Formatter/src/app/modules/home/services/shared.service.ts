import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private inputDataSubject: Subject<string> = new Subject<string>();

  inputDataChange: Observable<string> = this.inputDataSubject.asObservable();

  constructor() { }

  setInputData(data: string) {

    this.inputDataSubject.next(data);
    
  }

}
