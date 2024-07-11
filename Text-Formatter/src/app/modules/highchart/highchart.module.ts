import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighchartRoutingModule } from './highchart-routing.module';
import { HighchartComponent } from './highchart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    HighchartComponent
  ],
  imports: [
    CommonModule,
    HighchartRoutingModule,
    HighchartsChartModule,
    FormsModule,
    
  ]
})
export class HighchartModule { 



}
