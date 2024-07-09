import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserformRoutingModule } from './userform-routing.module';
import { UserformComponent } from './userform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserformComponent
  ],
  imports: [
    CommonModule,
    UserformRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserformModule { }
