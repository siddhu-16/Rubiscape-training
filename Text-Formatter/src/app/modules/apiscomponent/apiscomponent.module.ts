import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiscomponentRoutingModule } from './apiscomponent-routing.module';
import { ApiscomponentComponent } from './apiscomponent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApiscomponentComponent
  ],
  imports: [
    CommonModule,
    ApiscomponentRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ApiscomponentModule { }
