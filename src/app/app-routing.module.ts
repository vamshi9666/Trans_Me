import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: "", component: LoginComponent },
  {
    path: "_admin",
    component: AdminComponent
  },
  {
    path:"_admin_login",
    component: AdminLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
