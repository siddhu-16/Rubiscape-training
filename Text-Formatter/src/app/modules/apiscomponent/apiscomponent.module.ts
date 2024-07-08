import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiscomponentRoutingModule } from './apiscomponent-routing.module';
import { ApiscomponentComponent } from './apiscomponent.component';


@NgModule({
  declarations: [
    ApiscomponentComponent
  ],
  imports: [
    CommonModule,
    ApiscomponentRoutingModule
  ]
})
export class ApiscomponentModule { }
