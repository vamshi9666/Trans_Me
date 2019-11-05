import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { RoutesService } from "../routes.service";

@Component({
  selector: "app-edit-modal",
  templateUrl: "./edit-modal.component.html",
  styleUrls: ["./edit-modal.component.css"]
})
export class EditModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private routes: RoutesService,

    private dialog: MatDialogRef<any>
  ) {}

  ngOnInit() {
    console.log(" this.dat is ", this.data);
  }

  updateRoute() {
    this.routes.updateRoute(this.data).subscribe(
      data => {
        console.log(" data res is ", data);
        this.dialog.close();
      },
      err => {
        this.dialog.close();
      }
    );
  }
}
