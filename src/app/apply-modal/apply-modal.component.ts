import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms'
import { RoutesService } from '../routes.service';

@Component({
  selector: 'app-apply-modal',
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.css']
})
export class ApplyModalComponent implements OnInit {
  studentId = new FormControl("");
  studentName = new FormControl("");
  constructor(
    public dialogRef: MatDialogRef<ApplyModalComponent>,
   public  routesService : RoutesService,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: String
    }) {

  }

  ngOnInit() {

  }
  applyStudent() {
    this.routesService.addStudentroute({
      routeId: this.data.id,
      studentName:this.studentName.value,
      studentId:this.studentId.value

    }).subscribe(data => {
      console.log('data ::::', data);
      this.dialogRef.close()
    })

  }


}
