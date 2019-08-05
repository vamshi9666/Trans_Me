import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ApplyModalComponent } from './apply-modal/apply-modal.component'
import { RoutesService } from './routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[];
  constructor(
    public dialog: MatDialog,
    public routeService: RoutesService,
    // public data: []

  ) { }
  displayedColumns: string[] = ['index', 'route_index', 'destination', 'no_seats', "action"];
  dataSource = new MatTableDataSource(this.data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openApplyModal(destinationId: string) {
    this.dialog.open(ApplyModalComponent, {
      height: '400px',
      width: '600px',
      data: {
        id: destinationId
      }
    })

  }
  ngOnInit() {
    this.routeService.getRoutes().subscribe((data: any) => {
      // tslint:disable-next-line: semicolon
      const arr = []
      data.data.map((route: any, i) => {
        arr.push({
          index: i,
          route_index: i * 2,
          destination: route.destination,
          no_seats: route.no_seats
        })
      })

      this.data = arr;
      console.log("dta", this.data);


    })
  }
}