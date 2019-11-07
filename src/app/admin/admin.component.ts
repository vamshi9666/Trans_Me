import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog, MatSnackBar } from "@angular/material";
import { RoutesService } from "../routes.service";
import { EditModalComponent } from "../edit-modal/edit-modal.component";
import { RouteDetailsModalComponent } from "../route-details-modal/route-details-modal.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  data = [];
  displayedColumns: string[] = [
    "index",
    "route_index",
    "destination",
    "no_seats",
    "actions",
    "delete",
    "details"
  ];
  public form = {
    destination: "",
    no_seats: 0,
    route_index: ""
  };
  dataSource = new MatTableDataSource(this.data);
  public formVisible: Boolean = false;
  constructor(
    private routeService: RoutesService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    this.arrangeData();
  }
  submitForm() {
    this.routeService
      .addNewRoute({
        ...this.form
      })
      .subscribe(data => {
        console.log(" data ", data);
        this.formVisible = false;
        this.arrangeData();
        this.form = {
          destination: "",
          no_seats: 0,
          route_index: ""
        };
      });
  }
  arrangeData() {
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
    });
  }

  showForm() {
    this.formVisible = !this.formVisible;
  }
  logout() {
    localStorage.clear();
    window.location.replace("/");
  }
  editRoute(route) {
    console.log(" clice ", route);
    const editDialog = this.dialog.open(EditModalComponent, { data: route });
    editDialog.afterClosed().subscribe(() => {
      this.arrangeData();
    });
  }
  deleteRoute(route) {
    this.routeService.deleteRoute(route.routeId).subscribe(
      data => {
        this.snack.open("deleted route ");
        this.arrangeData();
      },
      err => {
        this.snack.open(" error in deleting route ");
      }
    );
  }
  showDetails(route) {
    const dialog = this.dialog.open(RouteDetailsModalComponent, {
      data: route
    });
    dialog.afterClosed().subscribe(() => {
      this.arrangeData();
    });
  }
}
