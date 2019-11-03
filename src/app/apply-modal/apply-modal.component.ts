import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormControl } from "@angular/forms";
import { RoutesService } from "../routes.service";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-apply-modal",
  templateUrl: "./apply-modal.component.html",
  styleUrls: ["./apply-modal.component.css"]
})
export class ApplyModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ApplyModalComponent>,
    public routesService: RoutesService,
    public authService: AuthService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: String;
      destination: String;
    }
  ) {}

  ngOnInit() {}
  onNoClick() {
    console.log(" two");
    this.dialogRef.close();
  }
  applyStudent() {
    const userId = localStorage.getItem("USER_ID");
    console.log(" current user is ", this.data);
    console.log(" three");

    this.routesService
      .addStudentroute({
        routeId: this.data.id,
        studentId: userId
      })
      .subscribe(data => {
        console.log("data ::::", data);
        alert(` successfully applied for ${this.data.destination} `);

        this.dialogRef.close();
      });
  }
}
