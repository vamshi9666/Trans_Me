import { Component, OnInit } from "@angular/core";
import { ApplyModalComponent } from "../apply-modal/apply-modal.component";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { RoutesService } from "../routes.service";
import { Router } from "@angular/router";
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
    public router: Router
  ) { }
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
  openApplyModal(destinationId: String) {
    this.dialog.open(ApplyModalComponent, {
      // height: '400px',
      // width: '600px',
      data: {
        id: destinationId
      }
    });
  }
  ngOnInit() {
    this.routeService.getRoutes().subscribe((data: any) => {
      // tslint:disable-next-line: semicolon
      const arr = [];
      data.data.map((route: any, i) => {
        arr.push({
          index: i,
          route_index: i * 2,
          routeId: route._id,
          destination: route.destination,
          no_seats: route.no_seats
        });
      });

      this.data = arr;
      console.log("data", this.data);
    });
  }
  logout() {
    localStorage.removeItem("AUTH_TOKEN");
    window.location.replace('/')
  }
}
