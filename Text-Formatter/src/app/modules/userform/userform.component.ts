import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  database_name : string = "";
  port_number : number = 0;
  database_password : string = "";
  database_url : string = "";


  signup : FormGroup;
  storedForms: any[] = [];

  constructor(private formBuilder : FormBuilder,private cookieService: CookieService){

    this.signup = this.formBuilder.group({
      dbname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      portnumber : new FormControl('',[Validators.required,Validators.pattern(/^\d{1,5}$/)]),
      dbpassword : new FormControl('',[Validators.required,Validators.minLength(7)]),
      dburl : new FormControl('',[Validators.required,Validators.pattern(/^(https?:\/\/.*[^\/])$/)])
    })

  }

  ngOnInit(): void {

    this.signup.reset();

    this.getAllStoredForms();

  }

  onSubmit(): void {
    
    const formValues = this.signup.value;

    const existingFormsString = this.cookieService.get('signup');

    const existingForms =  JSON.parse(existingFormsString) ;

    existingForms.push(formValues);

    this.cookieService.set('signup', JSON.stringify(existingForms));

    console.log(`Form Data: ${JSON.stringify(existingForms)}`);
    
    
    this.signup.reset();
    

    this.getAllStoredForms();

  }

  getAllStoredForms(): void {

    const storedFormsString = this.cookieService.get('signup');

    this.storedForms =  JSON.parse(storedFormsString) ;
     
  }



}
