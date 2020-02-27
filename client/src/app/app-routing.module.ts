import { LoginComponent } from "./main/login/login.component";
//import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { AdminComponent } from "./admin/admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { ReviewComponent } from "./review/review.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
//import { AuthorizationGuard } from './authorization.guard';

const routes: Routes = [
  {
      path:'admindashboard', component:AdmindashboardComponent,
    
    // path: '',
    // component: HomeComponent,
    //canActivateChild: [AuthorizationGuard],
    children: [
      {
        path: 'manager',
        component: ReviewComponent,
        data: {
          allowedRoles: ['manager','clevel']
        }
      },
    
      {
        path: 'employee',
        component: TimesheetComponent,
        data: {
          allowedRoles: ['employee', 'manager']
        }
      },
      {
        path: 'clevel',
        component: DashboardComponent,
        data: {
          allowedRoles: ['clevel']
        }
      },
      // {
      //   path: 'admin',
      //   component: AdminComponent ,
      //   data: {
      //     allowedRoles: ['admin']
      //   }
      // },
      {
        path: 'accessdenied',
        component: AccessDeniedComponent,
        data: {}
      },
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },  
      {
        path: '**',
        redirectTo: ''
      }
    ]
=======
    path: "",
    component: LoginComponent
  },
  {
    path: "manager",
    component: ReviewComponent
    // data: {
    //       allowedRoles: ['manager']
    //     }
  },
  {
    path: "employee",
    component: TimesheetComponent
    // data: {
    //   allowedRoles: ['employee']
    // }
  },
  {
    path: "clevel",
    component: DashboardComponent
    // data: {
    //   allowedRoles: ['clevel']
    // }
  },
  {
    path: "admin",
    component: AdmindashboardComponent
    // data: {
    //   allowedRoles: ['admin']
    // }
  },
  {
    path: "accessdenied",
    component: AccessDeniedComponent,
    data: {}
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
