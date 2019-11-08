import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import {
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatSpinner,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
  MatTabGroup,
  MatTabsModule,
  MatListModule,
  MatPaginatorModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApplyModalComponent } from "./apply-modal/apply-modal.component";
import { HttpClientModule } from "@angular/common/http";
import { RoutesService } from "./routes.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";
import { SignupModalComponent } from "./signup-modal/signup-modal.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { EditModalComponent } from "./edit-modal/edit-modal.component";
import { RouteDetailsModalComponent } from "./route-details-modal/route-details-modal.component";
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ApplyModalComponent,
    AdminComponent,
    LoginComponent,
    SignupModalComponent,
    AdminLoginComponent,
    EditModalComponent,
    RouteDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent],
  entryComponents: [
    ApplyModalComponent,
    SignupModalComponent,
    EditModalComponent,
    RouteDetailsModalComponent
  ]
})
export class AppModule {}
