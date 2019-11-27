import { Component, OnInit } from "@angular/core";
import { ApplyModalComponent } from "../apply-modal/apply-modal.component";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { RoutesService } from "../routes.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  data: any[];
  constructor(
    public dialog: MatDialog,
    public routeService: RoutesService, // public data: [],
    public router: Router,
    private auth: AuthService
  ) {}
  displayedColumns: string[] = [
    "index",
    "route_index",
    "destination",
    "no_seats",
    "action"
  ];
  dataSource = new MatTableDataSource(this.data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openApplyModal(destinationId: any) {
    const userId = localStorage.getItem("USER_ID");
    const confirmationDialog = this.dialog.open(ApplyModalComponent, {
      // height: '400px',
      // width: '600px',
      data: {
        id: destinationId.routeId,
        destination: destinationId.destination
      }
    });
    console.log(" user id >>", userId);
    const { routeId, destination } = destinationId;
    console.log(" destinatino is ", routeId);
    confirmationDialog.afterClosed().subscribe(data => {
      console.log(" one ");
      this.arrangeData();
      setTimeout(() => {
        localStorage.clear();
    window.location.replace("/");
      })
      // this.routeService
      //   .addStudentroute({
      //     studentId: userId,
      //     routeId
      //   })
      //   .subscribe(
      //     data => {
      //       alert(` successfully applied for ${destination} `);
      //       console.log(" applies for one route", data);
      //       this.arrangeData();
      //     },
      //     err => {
      //       alert(" some thing went wrong ");
      //       console.log(" error in ", err);
      //     }
      //   );
    });
  }
  arrangeData() {
    this.routeService.getRoutes().subscribe((data: any) => {
      // tslint:disable-next-line: semicolon
      const arr = [];
      data.data.map((route: any, i) => {
        arr.push({
          index: i,
          route_index: route.route_index || "",
          routeId: route._id,
          destination: route.destination,
          no_seats: route.no_seats
        });
      });
      this.data = arr;
      console.log("data", this.data);
    });
  }
  ngOnInit() {
    this.arrangeData();
  }
  logout() {
    // localStorage.removeItem("AUTH_TOKEN");
    // localStorage.removeItem("")
    localStorage.clear();
    window.location.replace("/");
  }
}
