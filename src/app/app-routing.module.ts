import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: "", component: LoginComponent },
  {
    path: "_admin",
    component: AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
