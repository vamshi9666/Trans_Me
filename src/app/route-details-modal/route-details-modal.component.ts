import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatPaginator,
  MatTableDataSource
} from "@angular/material";
import { RoutesService } from "../routes.service";
import { DataSource } from "@angular/cdk/table";

@Component({
  selector: "app-route-details-modal",
  templateUrl: "./route-details-modal.component.html",
  styleUrls: ["./route-details-modal.component.css"]
})
export class RouteDetailsModalComponent implements OnInit {
  info: any;
  error: any;
  displayedColumns: string[] = ["id", "name", "email"];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    public dialog: MatDialogRef<RouteDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public routeService: RoutesService
  ) {}

  ngOnInit() {
    console.log(" this.dat is ", this.data);
    this.routeService.getOneRoute(this.data.routeId).subscribe(
      routeInfo => {
        if (routeInfo.success) {
          const students = routeInfo.data.map(({ studentId }) => {
            return { ...studentId };
          });
          console.log(" studetns are ", students);
          this.info = new MatTableDataSource(students);
          this.info.paginator = this.paginator;
        } else {
          this.error = "something went wrong ";
        }
        console.log(" route ifnog is ", routeInfo);
      },
      err => {
        console.log(" err in fetching one route", err);
        this.error = "error in fetching student details for this route";
      }
    );
  }
}
