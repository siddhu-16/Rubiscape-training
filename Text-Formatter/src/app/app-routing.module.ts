import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './modules/userform/userform.component';

const routes: Routes = [
  {
    path:'home', loadChildren:() => import('./modules/home/home.module').then(m=>
      m.HomeModule
    )
  },
  {
    path:'userform',component :UserformComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
