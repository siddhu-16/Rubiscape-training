import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RemoveSpecialCharPipe } from './Pipes/remove-special-char.pipe';
import { UserformModule } from './modules/userform/userform.module';

@NgModule({
  declarations: [
    AppComponent,
    // RemoveSpecialCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
