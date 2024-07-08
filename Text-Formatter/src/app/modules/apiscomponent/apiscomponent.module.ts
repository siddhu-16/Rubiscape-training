import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiscomponentRoutingModule } from './apiscomponent-routing.module';
import { ApiscomponentComponent } from './apiscomponent.component';


@NgModule({
  declarations: [
    ApiscomponentComponent
  ],
  imports: [
    CommonModule,
    ApiscomponentRoutingModule,
    HttpClientModule
  ]
})
export class ApiscomponentModule { }
