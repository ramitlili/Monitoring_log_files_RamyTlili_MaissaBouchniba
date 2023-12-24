import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardDatanodesComponent } from './components/dashboard-datanodes/dashboard-datanodes.component';
import { DashboardNamenodeComponent } from './components/dashboard-namenode/dashboard-namenode.component';
import { DashboardSecondarynamenodeComponent } from './components/dashboard-secondarynamenode/dashboard-secondarynamenode.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },{
    path: 'dashboarddatanode',
    component: DashboardDatanodesComponent,
    canActivate: [authGuard]
  },{
    path: 'Dashboardnamenode',
    component: DashboardNamenodeComponent,
    canActivate: [authGuard]
  },{
    path: 'Dashboardsecodairenamenode',
    component: DashboardSecondarynamenodeComponent,
    canActivate: [authGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
