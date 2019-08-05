import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MatTableModule, MatInputModule, MatButtonModule, MatDialogModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyModalComponent } from './apply-modal/apply-modal.component';
import { HttpClientModule } from '@angular/common/http'
import { RoutesService } from './routes.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ApplyModalComponent
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

    FormsModule
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
