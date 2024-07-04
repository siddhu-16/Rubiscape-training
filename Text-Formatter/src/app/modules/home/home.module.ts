import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TextDisplayComponent } from './components/text-display/text-display.component';
import { FormattersComponent } from './components/formatters/formatters.component';

@NgModule({
  declarations: [
    HomeComponent,
    TextDisplayComponent,
    FormattersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
