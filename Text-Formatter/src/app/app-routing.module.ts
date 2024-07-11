import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './modules/userform/userform.component';
import { ApiscomponentComponent } from './modules/apiscomponent/apiscomponent.component';
import { HighchartComponent } from './modules/highchart/highchart.component';

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
    path:'highchart',component :HighchartComponent
  },
  {
    path:'apiscomponent',component :ApiscomponentComponent
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
