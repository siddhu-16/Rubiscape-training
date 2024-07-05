import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  btn_clicked : any;

  constructor() { }
  
  updateData(btn_id:any){
    this.btn_clicked = btn_id;
  }
  
  ngOnInit(): void {
  }

}
