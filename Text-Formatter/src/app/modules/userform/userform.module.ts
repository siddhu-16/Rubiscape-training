import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserformRoutingModule } from './userform-routing.module';
import { UserformComponent } from './userform.component';


@NgModule({
  declarations: [
    UserformComponent
  ],
  imports: [
    CommonModule,
    UserformRoutingModule
  ]
})
export class UserformModule { }
