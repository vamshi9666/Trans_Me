import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-apply-modal',
  templateUrl: './apply-modal.component.html',
  styleUrls: ['./apply-modal.component.css']
})
export class ApplyModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ApplyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: String
    }) { }

  ngOnInit() {
    
  }


}
