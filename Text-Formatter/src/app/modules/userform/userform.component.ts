import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {



  validate : FormGroup;
  storedForms: any[] = [];

  constructor(private formBuilder : FormBuilder, private cookieService: CookieService){

    this.validate = this.formBuilder.group({

      dbname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      portnumber : new FormControl('',[Validators.required,Validators.pattern(/^\d{1,5}$/)]),
      dbpassword : new FormControl('',[Validators.required,Validators.minLength(7)]),
      dburl : new FormControl('',[Validators.required,Validators.pattern(/^(https?:\/\/.*[^\/])$/)])

    })

  }

  ngOnInit(): void {

    this.validate.reset();
    this.getRestoredData();

  }

  onSubmit(): void {
    
    const Currentvalues = this.validate.value;
    debugger
    let existingForms = [];

    const existingData = this.cookieService.get('Data');
    debugger
    if(existingData){

      try{
        
        existingForms =  JSON.parse(existingData)  ;
      }
      catch(e){
        console.log(e)
      }
    }
    
    existingForms.push(Currentvalues);
    debugger
    this.cookieService.set('Data', JSON.stringify(existingForms));
    
    this.validate.reset();
    this.getRestoredData();

  }

  getRestoredData(): void {

    const storedFormsString = this.cookieService.get('Data');
    debugger
    if(storedFormsString){
      try{
        
        this.storedForms =  JSON.parse(storedFormsString) ;  ;
      }
      catch(e){
        console.log(e)
      }
    }
  }



}
