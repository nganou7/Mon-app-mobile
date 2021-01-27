import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationGuard } from './authentification.guard';
import { SmsComponent } from './sms/sms.component';
const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  { path: 'sms', component: SmsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },{
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }

