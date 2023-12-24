import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MenuSecondaireComponent } from './components/menu-secondaire/menu-secondaire.component';
import { DashboardDatanodesComponent } from './components/dashboard-datanodes/dashboard-datanodes.component';
import { DashboardSecondarynamenodeComponent } from './components/dashboard-secondarynamenode/dashboard-secondarynamenode.component';
import { DashboardNamenodeComponent } from './components/dashboard-namenode/dashboard-namenode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MenuPrincipalComponent,
    MenuSecondaireComponent,
    DashboardDatanodesComponent,
    DashboardSecondarynamenodeComponent,
    DashboardNamenodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
