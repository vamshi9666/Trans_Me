import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms'

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
    @Inject(MAT_DIALOG_DATA) public data: {
      id: String
    }) {

  }

  ngOnInit() {

  }
  applyStudent() {
    console.log(" name is ", this.studentName);
    console.log(" student id ", this.studentId);

  }


}
