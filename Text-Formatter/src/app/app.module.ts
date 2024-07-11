import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformModule } from './modules/userform/userform.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiscomponentModule } from './modules/apiscomponent/apiscomponent.module';
import { HighchartModule } from './modules/highchart/highchart.module';

@NgModule({
  declarations: [
    AppComponent,
    // RemoveSpecialCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserformModule,
    HttpClientModule,
    HighchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
