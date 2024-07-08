import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RemoveSpecialCharPipe } from './Pipes/remove-special-char.pipe';
import { UserformModule } from './modules/userform/userform.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // RemoveSpecialCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserformModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
