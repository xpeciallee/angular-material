import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AutomationConfigComponent } from './automation-config/automation-config.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // {
  //   path:'home',component:HomeComponent
  //   ,canActivate:[AuthGuard]
  // },
  {
    path:'user',component:UserListComponent
    ,canActivate:[AuthGuard]
  },
  {
    path:'automationConfig',component:AutomationConfigComponent
    ,canActivate:[AuthGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
