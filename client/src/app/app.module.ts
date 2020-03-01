import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SendHttpRequestService } from './services/send-http-request.service';
//import { AuthorizationService } from './services/authorization.service';

//Third Party Components
import {
  MDBBootstrapModule,
  CheckboxModule,
  WavesModule,
  ButtonsModule,
  InputsModule,
  IconsModule,
  CardsModule,
  TableModule
} from "angular-bootstrap-md";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ReviewComponent } from './review/review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeFormComponent } from "./main/employee-form/employee-form.component";
import { EmployeeService } from "./services/employee.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { TimesheetModule } from './timesheet/timesheet.module';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    EmployeeFormComponent,

    HomeComponent,
    ReviewComponent,
    DashboardComponent,
    AdminComponent,
    AccessDeniedComponent,
    AdmindashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TimesheetModule,
   
    //Third Party
    MDBBootstrapModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule,
    FormsModule, 
    HttpClientModule,
    TableModule,
   // JwtModule.forRoot({}),
    //Third Party
    MDBBootstrapModule.forRoot(),
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule, AppRoutingModule,

  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
