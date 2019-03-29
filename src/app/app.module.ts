import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks/tasks.component";
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { LoginComponent } from "./Login/login.component";
import { HeaderComponent } from "./header/header.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { LeaveComponent } from "./leave/leave.component";
import { LoginLayoutComponent } from "./login-layout/login-layout.component";
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ProjectComponent } from './project/project.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayprojectComponent } from './displayproject/displayproject.component';
import { CreatetimesheetComponent } from './createtimesheet/createtimesheet.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { ChangeprojectComponent } from './changeproject/changeproject.component';
import { ProjectListComponent } from "./project-list/project-list.component";
import { CreateTaskComponent } from './create-task/create-task.component';
import { ChangeTeamComponent } from "./change-team/ChangeTeamComponent";
import { CreateTeamComponent } from './create-team/create-team.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
 import { DisplayTaskComponent } from './display-task/display-task.component';
import { DisplayteamComponent } from './displayteam/displayteam.component';
import { LeavestatusComponent } from "./leavestatus/leavestatus.component";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangetimesheetComponent } from './changetimesheet/changetimesheet.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { LeavesComponent } from './leaves/leaves.component';
import { DisplayProjectComponent } from './display-project/display-project.component';

@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LoginLayoutComponent,
        children: [
          {
            path: "",
            component: LoginComponent
          },
          {
            path: "login",
            component: LoginComponent
          }
        ]
      },
      {
        path: "",
        component: HomeLayoutComponent,
        children: [
          {
            path: "dashboard",
            component: DashboardComponent
          },
          {
            path: "leave",
            component: LeaveComponent
          },
          {
            path: "task",
            component: TasksComponent
          },
          // {
          //   path: "changeteam",
          //   component: ChangeteamComponent
          // },
          {
            path :"timesheet",
            component :TimesheetComponent
          },
          {
            path :"project",
            component :ProjectComponent
          },
          {
            path :"displayproject",
            component :DisplayprojectComponent
          }
          , {
            path :"createtimesheet",
            component :CreatetimesheetComponent
          },
          {
            path :"leavehistory",
            component :LeavehistoryComponent
          },
          {
            path :"Projectlist",
            component : ProjectListComponent     },
            {
              path :"changeproject",
              component : ChangeprojectComponent     },
              {
                path :"create-task",
                component : CreateTaskComponent     },

                {
                  path :"change-team",
                  component :ChangeTeamComponent
                },
                {
                  path :"create-team",
                  component : CreateTeamComponent     },
                  {
                    path :"display-task",
                    component : DisplayTaskComponent
                  },
                  {
                    path :"menu",
                    component :MenuComponent
                  }
                  ,
                  {
                    path :"displayteam",
                    component :DisplayteamComponent
                  }
                  ,
                  {
                    path :"leavestatus",
                    component :LeavestatusComponent
                  },
                  {
                    path :"signup",
                    component :  SignupComponent
                  }
                  ,
                  {
                    path :"forgotpassword",
                    component :  ForgotpasswordComponent
                  }  ,
                  {
                    path :"changetimesheet",
                    component :  ChangetimesheetComponent
                  } ,
                  {
                    path :"changeprofile",
                    component :  ChangeprofileComponent
                  },
                  {
                    path :"profile",
                    component : ProfileComponent
                  }
                  ,
                  {
                    path :"leaves",
                    component : LeavesComponent
                  },
                  {
                    path :"display-project",
                    component : DisplayProjectComponent
                  }
  
      
        ]
      }
    ])
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    TasksComponent,
    ProfileComponent,
    DashboardComponent,
    HeaderComponent,
    HomeLayoutComponent,
    LeaveComponent,
    LoginLayoutComponent,
    TimesheetComponent,
    ProjectComponent,
    SignupComponent,
    DisplayprojectComponent,
    CreatetimesheetComponent,
    LeavehistoryComponent,
    ChangeprojectComponent,
    ProjectListComponent,
    CreateTaskComponent,
    ChangeTeamComponent,
    CreateTeamComponent,
    MenuComponent,
    FeedComponent,
     DisplayTaskComponent,
     DisplayteamComponent,
     LeavestatusComponent,
     ForgotpasswordComponent,
     ChangetimesheetComponent,
     ChangeprofileComponent,
     LeavesComponent,
     DisplayProjectComponent
  ]
})
export class AppModule {}
